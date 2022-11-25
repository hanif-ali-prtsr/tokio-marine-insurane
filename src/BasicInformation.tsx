import { partial } from "lodash";
import { DateInput } from "./components/DateInput";
import { SelectInput } from "./components/SelectInput";
import { TextInput } from "./components/TextInput";
import { t } from "./i18nConfig";
import { fieldNames, selectOptions } from "./utils";

interface Props {
  inputData: Record<any, any>;
  handleInputChange: (fieldName: string, value: any) => void;
}

export const BasicInformation = (props: Props) => {
  const { inputData, handleInputChange } = props;

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-2xl">{t("Basic Information")}</h1>
      <div className="flex mt-6">
        <div className="flex-1 flex items-center">{t("Insurance Period")}</div>
        <div className="px-2">
          <DateInput
            value={inputData[fieldNames.insurancePeriodStart]}
            onChange={partial(
              handleInputChange,
              fieldNames.insurancePeriodStart
            )}
          />
        </div>
        <p className="flex items-center">{t("to")}</p>
        <div className="px-2">
          <DateInput
            value={inputData[fieldNames.insurancePeriodEnd]}
            onChange={partial(handleInputChange, fieldNames.insurancePeriodEnd)}
          />
        </div>
      </div>

      <div className="flex mt-6">
        <div className="pr-2 flex-1">
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
        <div className="box pl-2 flex items-center justify-center flex-1">
          <SelectInput
            options={selectOptions.paymentMethod}
            label={t("Payment Method")}
            onChange={partial(handleInputChange, fieldNames.paymentMethod)}
            value={inputData[fieldNames.paymentMethod]}
          />
        </div>
      </div>
    </div>
  );
};
