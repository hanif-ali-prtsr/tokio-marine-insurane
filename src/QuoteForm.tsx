import { useEffect, useState } from "react";
import { QuoteUrls, req } from "./api";
import { BasicInformation } from "./sections/BasicInformation";
import Button from "./components/Button";
import { t } from "./i18nConfig";
import { PremiumOutput } from "./sections/PremiumOutput";
import { SalesInformation } from "./sections/SalesInformation";
import LoadingOverlay from "react-loading-overlay";
import { QuoteErrors } from "./sections/QuoteErrors";
import { ContractorInformation } from "./sections/ContractorInformation";
import { convertErrorsArrayToDict, fieldNames } from "./utils";
import { ClipLoader } from "react-spinners";
import { triggerFileDownloadFromLink } from "./utils/download";

const urls = new QuoteUrls(
  "https://api-demo.protosure.io/",
  // "http://localhost:10000",
  "dfd4a7c9-ff31-4d29-865c-39da71b31b3b"
);

export const QuoteForm = () => {
  const [quote, setQuote] = useState<Record<any, any>>({});
  const [loading, setLoading] = useState(true);
  const [calculating, setCalculating] = useState(false);
  const [inputData, setInputData] = useState<Record<any, any>>({});
  const [raterErrors, setRaterErrors] = useState<string[]>([]);
  const [quoteErrors, setQuoteErrors] = useState<Record<any, any>>({})

  const [documentSets, setDocumentSets] = useState<any[]>([]);
  const [updatingDocumentSets, setUpdatingDocumentSets] =
    useState<boolean>(true);

  const handleInputChange = async (fieldName: string, value: any) => {
    const newInputData = { ...inputData, [fieldName]: value };
    setInputData(newInputData);

    if (fieldName === fieldNames.contractorName){
      setUpdatingDocumentSets(true)
    }

    const newQuote = await (
      await req("PATCH", urls.updateQuoteInputDataUrl, {
        inputData: newInputData,
      })
    ).json();
    setQuote(newQuote ?? {});

    if (fieldName === fieldNames.contractorName) {
      updateDocumentSets();
    }
  };

  const getQuote = async () => {
    const data = await (await req("POST", urls.getOrCreateQuoteUrl)).json();
    setQuote(data ?? {});
    setInputData(data.inputData);
    urls.quoteId = data.id;
    urls.policyId = data.policy;
    setLoading(false);
    updateDocumentSets()
  };

  const handleCalculate = async () => {
    setCalculating(true);
    const calculationResponse = await (
      await req("POST", urls.calculateUrl)
    ).json();
    if (calculationResponse.quoteErrors){
      console.log(convertErrorsArrayToDict(calculationResponse.quoteErrors))
      setQuoteErrors(convertErrorsArrayToDict(calculationResponse.quoteErrors))
    }
    else{
      setQuote({ ...quote, raterData: calculationResponse.raterData });
      setQuoteErrors([])
      setCalculating(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const updateDocumentSets = async () => {
    setUpdatingDocumentSets(true);
    if (!inputData[fieldNames.contractorName]) {
      setDocumentSets([]);
      setUpdatingDocumentSets(false);
      return;
    }
    const documentSets = await (await req("GET", urls.documentSetsUrl)).json();
    setDocumentSets(documentSets);
    setUpdatingDocumentSets(false);
  };

  const handleDownloadData = async () => {
    const documentUrls = documentSets.map((docSet) =>
      urls.documentSetRenderUrl(docSet.id)
    );
    documentUrls.map((link) => triggerFileDownloadFromLink(link));
  };

  useEffect(() => {
    setRaterErrors(
      [
        quote.raterData?.output_error1,
        quote.raterData?.output_error2,
        quote.raterData?.output_error3,
      ].filter((val) => Boolean(val))
    );
  }, [quote]);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-cyan-700 p-6 text-white text-xl">
        <div>
          {t(
            "Nursing care service provider liability insurance premium calculation sheet (for agencies)"
          )}
        </div>
      </nav>
      {/* @ts-ignore */}
      <LoadingOverlay
        active={loading}
        spinner
        text={t("Fetching Quote")}
        styles={{
          content: () => ({
            marginTop: "40vh",
            marginLeft: "auto",
            marginRight: "auto",
          }),
        }}
      >
        <div className="p-6 w-full">
          <BasicInformation
            inputData={inputData}
            handleInputChange={handleInputChange}
            errors={quoteErrors}
          />
          <SalesInformation
            inputData={inputData}
            calculatedData={quote.calculatedData ?? {}}
            handleInputChange={handleInputChange}
            errors={quoteErrors}
          />

          <hr className="my-8" />

          <div className="w-1/2 mx-auto text-center">
            <Button
              label={calculating ? t("Calculating") : t("Calculate")}
              disabled={calculating}
              onClick={handleCalculate}
            />
          </div>
          {raterErrors.length > 0 && <QuoteErrors errors={raterErrors} />}
          <PremiumOutput raterData={quote.raterData ?? {}} />

          <hr className="my-8" />

          <ContractorInformation
            inputData={inputData}
            handleInputChange={handleInputChange}
            errors={quoteErrors}
          />

          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white  font-bold py-2 px-4 rounded inline-flex items-center w-[195px] h-[38px] justify-center"
              disabled={!(documentSets.length > 0) || updatingDocumentSets}
              onClick={handleDownloadData}
            >
              {updatingDocumentSets ? (
                <ClipLoader size="27px" />
              ) : (
                <>
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>{t("Download Data")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};
