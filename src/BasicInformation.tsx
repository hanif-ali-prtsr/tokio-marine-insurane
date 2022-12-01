import { partial } from "lodash";
import { DateInput } from "./components/DateInput";
import { SelectInput } from "./components/SelectInput";
import { TextInput } from "./components/TextInput";
import { t } from "./i18nConfig";
import {
  fieldNames,
  selectOptions,
  shouldDisplayNumberOfPaymentsField,
  shouldDisplayPaymentMethod2Field,
  shouldDisplayProvisionalPremiumRateField,
} from "./utils";

interface Props {
  inputData: Record<any, any>;
  handleInputChange: (fieldName: string, value: any) => void;
}

export const BasicInformation = (props: Props) => {
  const { inputData, handleInputChange } = props;

  // const insurancePeriod = useMemo(() => {
  //   const insurancePeriodStart = inputData[fieldNames.insurancePeriodStart];
  //   const insurancePeriodEnd = inputData[fieldNames.insurancePeriodEnd];

  //   if (!insurancePeriodStart || !insurancePeriodEnd) {
  //     return null;
  //   }
  // }, [
  //   inputData?.[fieldNames.insurancePeriodStart],
  //   inputData?.[fieldNames.insurancePeriodEnd],
  // ]);

  return (
    <div className="md:w-1/2 mx-auto">
      <h1 className="text-2xl main-header">{t("Basic Information")}</h1>
      <div className="flex mt-6 md:flex-row flex-col">
        <div className="flex items-center mr-5">{t("Insurance Period")}</div>
        <div className="md:px-2">
          <DateInput
            value={inputData[fieldNames.insurancePeriodStart]}
            onChange={partial(
              handleInputChange,
              fieldNames.insurancePeriodStart
            )}
          />
        </div>
        <p className="flex items-center">{t("to")}</p>
        <div className="md:px-2">
          <DateInput
            value={inputData[fieldNames.insurancePeriodEnd]}
            onChange={partial(handleInputChange, fieldNames.insurancePeriodEnd)}
          />
        </div>
      </div>

      <div className="flex mt-6 md:flex-row flex-col">
        <div className="md:pr-2 flex-1">
          <SelectInput
            options={selectOptions.detailedActuarialDistinction}
            label={t("Detailed and Actuarian Distinction")}
            onChange={partial(
              handleInputChange,
              fieldNames.detailedActuarialDistinction
            )}
            value={inputData[fieldNames.detailedActuarialDistinction]}
          />
        </div>
        <div className="box flex items-center justify-center flex-1 pt-2 md:pt-0">
          <SelectInput
            options={selectOptions.paymentMethod}
            label={t("Payment Method")}
            onChange={partial(handleInputChange, fieldNames.paymentMethod)}
            value={inputData[fieldNames.paymentMethod]}
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col">
        {shouldDisplayProvisionalPremiumRateField(inputData) && (
          <>
            <div className="md:pr-2 mt-6 flex-1">
              <TextInput
                type="text"
                label={t("Provisional Premium Rate")}
                onBlur={partial(
                  handleInputChange,
                  fieldNames.provisionalPremiumRate
                )}
                value={inputData[fieldNames.provisionalPremiumRate]}
              />
            </div>
            <div className="box flex items-end flex-1 pt-2 md:pt-0">
              <p className="text-sm md:ml-2">
                {t("Please between 50 and 100")}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="flex mt-6 md:flex-row flex-col">
        {shouldDisplayNumberOfPaymentsField(inputData) && (
          <div className="md:pr-2 flex-1">
            <SelectInput
              options={selectOptions.numberOfPayments}
              label={t("Number of Payments")}
              onChange={partial(handleInputChange, fieldNames.numberOfPayments)}
              value={inputData[fieldNames.numberOfPayments]}
            />
          </div>
        )}
        {shouldDisplayPaymentMethod2Field(inputData) && (
          <div className="box flex items-center justify-center flex-1 pt-2 md:pt-0">
            <SelectInput
              options={selectOptions.paymentMethod2}
              label={t("Payment Method 2")}
              onChange={partial(handleInputChange, fieldNames.paymentMethod2)}
              value={inputData[fieldNames.paymentMethod2]}
            />
          </div>
        )}
      </div>
    </div>
  );
};
