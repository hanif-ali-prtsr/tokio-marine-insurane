import { partial } from "lodash";
import { SelectInput } from "./components/SelectInput";
import { Table, TableCell, TableRow } from "./components/Table";
import { TextInput } from "./components/TextInput";
import { t } from "./i18nConfig";
import { calcultaedFieldNames, fieldNames, selectOptions } from "./utils";

interface Props {
  handleInputChange: (fieldName: string, value: any) => void;
  inputData: Record<any, any>;
  calculatedData: Record<any, any>;
}

export const SalesInformation = (props: Props) => {
  const { handleInputChange, inputData, calculatedData } = props;
  return (
    <div className="flex mt-8 w-3/4 mx-auto">
      <div className="flex-1 pr-2">
        <h1 className="text-lg mb-4">{t("Basic Figures (Sales)")}</h1>
        <TextInput
          type="number"
          label={t("Sales Facility Operations")}
          onBlur={partial(
            handleInputChange,
            fieldNames.salesFacilityOperations
          )}
          value={inputData[fieldNames.salesFacilityOperations]}
        />
        <TextInput
          type="number"
          label={t("Sales Home-visit care and other services")}
          onBlur={partial(handleInputChange, fieldNames.salesHomeVisit)}
          value={inputData[fieldNames.salesHomeVisit]}
        />
        <TextInput
          type="number"
          label={t("Sales Home-visit nursing services (thousand yen)")}
          onBlur={partial(handleInputChange, fieldNames.salesHomeVisitNursing)}
          value={inputData[fieldNames.salesHomeVisitNursing]}
        />
        <TextInput
          type="number"
          label={t("Sales In-home care support services (1,000 yen)")}
          onBlur={partial(handleInputChange, fieldNames.salesInHomeCare)}
          value={inputData[fieldNames.salesInHomeCare]}
        />
        <TextInput
          type="number"
          label={t("Net sales Welfare equipment sales and rental (1,000 yen)")}
          onBlur={partial(
            handleInputChange,
            fieldNames.netSaleWelfareEquipment
          )}
          value={inputData[fieldNames.netSaleWelfareEquipment]}
        />
        <TextInput
          type="number"
          label={t("Net sales Home renovation (1,000 yen)")}
          onBlur={partial(handleInputChange, fieldNames.netSaleHomeRenovation)}
          value={inputData[fieldNames.netSaleHomeRenovation]}
        />
        <Table>
          <TableRow>
            <TableCell bold>{t("Total")}</TableCell>
            <TableCell bold>
              {calculatedData[calcultaedFieldNames.totalSales]}{" "}
              {t("thousand yen")}
            </TableCell>
          </TableRow>
        </Table>
      </div>
      <div className="flex-1 px-2">
        <h1 className="text-lg mb-4">{t("Basic Contract")}</h1>
        <h3 className="italic">
          {t(
            "Individual/property compensation (excluding home-visit nursing services)"
          )}
        </h3>
        <SelectInput
          options={selectOptions.basicContractPaymentLimit}
          label={t("Payment limit (1 accident/during period) (1,000 yen) ")}
          onChange={partial(
            handleInputChange,
            fieldNames.basicContractPaymentLimit
          )}
          value={inputData[fieldNames.basicContractPaymentLimit]}
        />
        <SelectInput
          options={selectOptions.basicContractDeductibleAmount}
          label={t("Deductible amount (1 accident) (thousand yen)")}
          onChange={partial(
            handleInputChange,
            fieldNames.basicContractDeductibleAmount
          )}
          value={inputData[fieldNames.basicContractDeductibleAmount]}
        />
        <h3 className="mt-3">
          {t("Personal/property compensation (visiting nursing services) *1")}
        </h3>
        <SelectInput
          options={selectOptions.propertyCompensationPaymentLimit}
          label={t("Payment limit (1 accident) (1,000 yen)")}
          onChange={partial(
            handleInputChange,
            fieldNames.propertyCompensationPaymentLimit
          )}
          value={inputData[fieldNames.propertyCompensationPaymentLimit]}
        />

        <div className=" mt-4">
          <Table>
            <TableRow>
              <TableCell bold>
                {t("Payment limit (during the period)	")}
              </TableCell>
              <TableCell bold>
                {
                  calculatedData[
                    calcultaedFieldNames.nusingPaymentLimitDuringPeriod
                  ]
                }{" "}
                {t("thousand yen")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell bold>{t("Deductible amount (1 accident)")}</TableCell>
              <TableCell bold>
                {
                  calculatedData[
                    calcultaedFieldNames.nursingDeductibleAmountAccident
                  ]
                }
                {t("thousand yen")}
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      <div className="flex-1 pl-2">
        <h1 className="text-lg mb-4">{t("Other Special Agreements")}</h1>

        <h3 className="mt-3">
          {t("Lawyer's fees collateral special agreement")}
        </h3>
        <p>{t("Personal Property Damage")}</p>

        <Table>
          <TableRow>
            <TableCell bold>{t("Payment limit (1 person)")}</TableCell>
            <TableCell>{t("1,000 thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t("Payment limit (for one accident/period)	")}
            </TableCell>
            <TableCell>{t("3,000 thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>{t("Deductible amount (1 accident)	")}</TableCell>
            <TableCell>{t("0 thousand yen")}</TableCell>
          </TableRow>
        </Table>

        <p className="mt-3">{t("[Economic damage]")}</p>
        <Table>
          <TableRow>
            <TableCell>{t("Payment limit (1 accident)")}</TableCell>
            <TableCell>100 {t("thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("Payment limit (during the period)")}</TableCell>
            <TableCell>300 {t("thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("Deductible amount (1 accident)")}</TableCell>
            <TableCell>0 {t("thousand yen")}</TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
};
