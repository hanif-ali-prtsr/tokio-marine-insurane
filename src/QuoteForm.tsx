import { useEffect, useState } from "react";
import { QuoteUrls, req } from "./api";
import { BasicInformation } from "./BasicInformation";
import Button from "./components/Button";
import { t } from "./i18nConfig";
import { PremiumOutput } from "./PremiumOutput";
import { SalesInformation } from "./SalesInformation";
import LoadingOverlay from "react-loading-overlay";
import { QuoteErrors } from "./QuoteErrors";

const urls = new QuoteUrls(
  // "https://api-demo.protosure.io/",
  "http://localhost:10000/",
  "dfd4a7c9-ff31-4d29-865c-39da71b31b3b"
);

export const QuoteForm = () => {
  const [quote, setQuote] = useState<Record<any, any>>({});
  const [loading, setLoading] = useState(true);
  const [calculating, setCalculating] = useState(false);
  const [inputData, setInputData] = useState<Record<any, any>>({});
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = async (fieldName: string, value: any) => {
    const newInputData = { ...inputData, [fieldName]: value };
    setInputData(newInputData);
    const newQuote = await (
      await req("PATCH", urls.updateQuoteInputDataUrl, {
        inputData: newInputData,
      })
    ).json();
    setQuote(newQuote ?? {});
  };

  const getQuote = async () => {
    const data = await (await req("POST", urls.getOrCreateQuoteUrl)).json();
    setQuote(data ?? {});
    setInputData(data.inputData);
    urls.quoteId = data.id;
    urls.policyId = data.policy;
    setLoading(false);
  };

  const handleCalculate = async () => {
    setCalculating(true);
    const calculationResponse = await (
      await req("POST", urls.calculateUrl)
    ).json();
    setQuote({ ...quote, raterData: calculationResponse.raterData });
    setCalculating(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    setErrors(
      [
        quote.raterData?.output_error1,
        quote.raterData?.output_error2,
        quote.raterData?.output_error3,
      ].filter((val) => Boolean(val))
    );
  }, [quote]);

  return (
    // @ts-ignore
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
        />
        <SalesInformation
          inputData={inputData}
          calculatedData={quote.calculatedData ?? {}}
          handleInputChange={handleInputChange}
        />

        <div className="mt-8 w-1/2 mx-auto text-center">
          <Button
            label={calculating ? t("Calculating") : t("Calculate")}
            disabled={calculating}
            onClick={handleCalculate}
          />
        </div>
        {errors.length > 0 && <QuoteErrors errors={errors} />}
        <PremiumOutput raterData={quote.raterData ?? {}} />
      </div>
    </LoadingOverlay>
  );
};
