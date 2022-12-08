import { partial } from "lodash";
import { useState } from "react";
import { req } from "../api";
import Button from "../components/Button";
import { PostalCodeInput } from "../components/PostalCodeInput";
import { SelectInput } from "../components/SelectInput";
import { TextInput } from "../components/TextInput";
import { t } from "../i18nConfig";
import { fieldNames, selectOptions } from "../utils";

interface Props {
  inputData: Record<any, any>;
  handleInputChange: (fieldName: string, value: any) => void;
  errors: Record<any, any>;
  api: any;
}

export const ContractorInformation = (props: Props) => {
  const { inputData, handleInputChange, errors, api } = props;

  const [autoFillingAddress, setAutoFillingAddress] = useState(false);

  const handleAddressChange = (field: string, value: any) => {
    handleInputChange(fieldNames.agencyAddress, {
      ...inputData[fieldNames.agencyAddress],
      [field]: value,
    });
  };

  const handleLookupPostalCode = async () => {
    setAutoFillingAddress(true);
    try {
      const zipCode = inputData[fieldNames.agencyAddress].postalCode;
      if (!zipCode) return;
      const lookupRes = await req(
        "GET",
        api.lookupJapanesePostCodeUrl(
          inputData[fieldNames.agencyAddress].postalCode
        )
      );
      if (lookupRes.status === 400) {
        alert(t("Invalid postal code"));
      } else {
        const lookupData = await lookupRes.json();
        if (lookupData.results?.length) {
          handleInputChange(fieldNames.agencyAddress, {
            ...inputData[fieldNames.agencyAddress],
            ...lookupData.results[0],
          });
        }
      }
    } finally {
      setAutoFillingAddress(false);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <h1 className="main-header text-2xl">{t("Contractor Information")}</h1>
      <div className="flex mt-6 md:flex-row flex-col">
        <div className="md:pr-2">
          <TextInput
            type="text"
            label={t("Policy Number")}
            value={inputData[fieldNames.policyNumber]}
            onBlur={partial(handleInputChange, fieldNames.policyNumber)}
            errors={errors[fieldNames.policyNumber]}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Contractor Name")}
            value={inputData[fieldNames.contractorName]}
            onBlur={partial(handleInputChange, fieldNames.contractorName)}
            errors={errors[fieldNames.contractorName]}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Remarks Column")}
            value={inputData[fieldNames.remarksColumn]}
            onBlur={partial(handleInputChange, fieldNames.remarksColumn)}
            errors={errors[fieldNames.remarksColumn]}
          />
        </div>
      </div>

      <h1 className="main-header text-2xl mt-5">{t("Agent Information")}</h1>
      <div className="mt-2 flex md:flex-row flex-col">
        <div className="md:pr-2">
          <TextInput
            type="text"
            label={t("Agency Code")}
            value={inputData[fieldNames.agencyCode]}
            onBlur={partial(handleInputChange, fieldNames.agencyCode)}
            errors={errors[fieldNames.agencyCode]}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Agency Name")}
            value={inputData[fieldNames.agencyName]}
            onBlur={partial(handleInputChange, fieldNames.agencyName)}
            errors={errors[fieldNames.agencyName]}
          />
        </div>
      </div>

      <div className="flex mt-6 md:flex-row flex-col md:items-end">
        <div className="md:pr-2">
          <PostalCodeInput
            type="text"
            label={t("Postal Code")}
            value={inputData[fieldNames.agencyAddress]?.postalCode}
            onBlur={(value) => handleAddressChange("postalCode", value)}
            errors={errors[fieldNames.agencyAddress]?.postalCode}
            disabled={autoFillingAddress}
          />
        </div>
        <Button
          label={autoFillingAddress ? t("Searching") : t("Lookup")}
          className="mt-2 md:mt-0 md:ml-2 h-[40px] w-[90px]"
          onClick={handleLookupPostalCode}
          disabled={autoFillingAddress}
        />
      </div>
      <div className="flex mt-6 md:flex-row flex-col">
        <div className="md:pr-2">
          <SelectInput
            label={t("Prefecture")}
            value={inputData[fieldNames.agencyAddress]?.prefecture}
            onChange={(value) => handleAddressChange("prefecture", value)}
            options={selectOptions.prefecture}
            errors={errors[fieldNames.agencyAddress]?.prefecture}
            disabled={autoFillingAddress}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Municipality")}
            value={inputData[fieldNames.agencyAddress]?.municipality}
            onBlur={(value) => handleAddressChange("municipality", value)}
            errors={errors[fieldNames.agencyAddress]?.municipality}
            disabled={autoFillingAddress}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Address")}
            value={inputData[fieldNames.agencyAddress]?.address}
            onBlur={(value) => handleAddressChange("address", value)}
            errors={errors[fieldNames.agencyAddress]?.address}
            disabled={autoFillingAddress}
          />
        </div>
      </div>
      <div className="flex mt-6 md:flex-row flex-col">
        <div className="md:pr-2">
          <TextInput
            type="text"
            label={t("Phone Number")}
            value={inputData[fieldNames.phoneNumber]}
            onBlur={partial(handleInputChange, fieldNames.phoneNumber)}
            errors={errors[fieldNames.phoneNumber]}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("FAX")}
            value={inputData[fieldNames.fax]}
            onBlur={partial(handleInputChange, fieldNames.fax)}
            errors={errors[fieldNames.fax]}
          />
        </div>
        <div className="md:px-2">
          <TextInput
            type="text"
            label={t("Communication Column")}
            value={inputData[fieldNames.communicationColumn]}
            onBlur={partial(handleInputChange, fieldNames.communicationColumn)}
            errors={errors[fieldNames.communicationColumn]}
          />
        </div>
      </div>
    </div>
  );
};
