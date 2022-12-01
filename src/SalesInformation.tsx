import { partial } from "lodash";
import { SelectInput } from "./components/SelectInput";
import { Table, TableCell, TableRow } from "./components/Table";
import { TextInput } from "./components/TextInput";
import { t } from "./i18nConfig";
import { calculatedFieldName, fieldNames, selectOptions } from "./utils";

interface Props {
  handleInputChange: (fieldName: string, value: any) => void;
  inputData: Record<any, any>;
  calculatedData: Record<any, any>;
}

export const SalesInformation = (props: Props) => {
  const { handleInputChange, inputData, calculatedData } = props;
  return (
    <div className="flex mt-8 md:w-3/4 mx-auto flex-col md:flex-row">
      <div className="flex-1 md:pr-2">
        <h1 className="text-lg mb-4 main-header">{t("Basic Figures (Sales)")}</h1>
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
            <TableCell className="bg-blue bg-blue">{t("Total")}</TableCell>
            <TableCell className="">
              {calculatedData[calculatedFieldName.totalSales]}{" "}
              {t("thousand yen")}
            </TableCell>
          </TableRow>
        </Table>

        <h1 className="text-lg my-4 main-header">{t("Special Terms")}</h1>
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Lawyer's Fees, etc Special Covenant")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectLawyerFeesCovenantClause
          )}
          value={inputData[fieldNames.selectLawyerFeesCovenantClause]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Service User Search Expense Guarantee Clause")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectServiceUserSearchClause
          )}
          value={inputData[fieldNames.selectServiceUserSearchClause]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t(
            "Special Clause for Covering Expenses for Specific Infectious Diseases"
          )}
          onChange={partial(
            handleInputChange,
            fieldNames.selectInfectiousDiseaseClause
          )}
          value={inputData[fieldNames.selectInfectiousDiseaseClause]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Victim medical expenses guarantee clause")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectVictimMedicalExpenseClause
          )}
          value={inputData[fieldNames.selectVictimMedicalExpenseClause]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Litigation cost guarantee clause")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectLitigationCostClause
          )}
          value={inputData[fieldNames.selectLitigationCostClause]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Initial support cost guarantee clause")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectInitialSupportCaluse
          )}
          value={inputData[fieldNames.selectInitialSupportCaluse]}
        />
        <SelectInput
          options={selectOptions.specialTermsClauses}
          label={t("Designated manager special agreement")}
          onChange={partial(
            handleInputChange,
            fieldNames.selectManagerSpecialAgreementClause
          )}
          value={inputData[fieldNames.selectManagerSpecialAgreementClause]}
        />
      </div>
      <div className="flex-1 px-2">
        <h1 className="text-lg mb-4 mt-4 md:mt-0 main-header">{t("Basic Contract")}</h1>
        <h3 className="sub-header mb-2">
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
        <h3 className="mt-3 sub-header">
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
              <TableCell className="bg-blue">
                {t("Payment limit (during the period)	")}
              </TableCell>
              <TableCell className="">
                {
                  calculatedData[
                    calculatedFieldName.nusingPaymentLimitDuringPeriod
                  ]
                }{" "}
                {t("thousand yen")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="bg-blue">
                {t("Deductible amount (1 accident)")}
              </TableCell>
              <TableCell className="">
                {
                  calculatedData[
                    calculatedFieldName.nursingDeductibleAmountAccident
                  ]
                }
                {t("thousand yen")}
              </TableCell>
            </TableRow>
          </Table>
        </div>

        <h3 className="mt-3 sub-header">{t("Property accident under management")}</h3>
        <Table>
          <TableRow>
            <TableCell className="bg-blue">
              {t("Payment limit (1 accident)")}
            </TableCell>
            <TableCell className="">
              3,000 {t("thousand yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue">
              {t("Currency and banknote payment limit (1 accident)")}
            </TableCell>
            <TableCell className="">300 {t("thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue">
              {t("Deductible amount (1 accident)")}
            </TableCell>
            <TableCell className="">
              {
                calculatedData[
                  calculatedFieldName.managedPropertyDeductibleAmount
                ]
              }{" "}
              {t("thousand yen")}
            </TableCell>
          </TableRow>
        </Table>

        <h3 className="mt-3 sub-header">{t("Human rights violation accident")}</h3>
        <Table>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (1 request/during period)")}
            </TableCell>
            <TableCell className="">
              3,000 {t("thousand yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Waiver amount (1 request)")}
            </TableCell>
            <TableCell className="">
              {
                calculatedData[
                  calculatedFieldName.managedPropertyDeductibleAmount
                ]
              }{" "}
              {t("thousand yen")}
            </TableCell>
          </TableRow>
        </Table>

        <h3 className="mt-3 sub-header">{t("Accident that inhibits use when missing")}</h3>
        <Table>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (for one accident/period)")}
            </TableCell>
            <TableCell className="">
              10,000 {t("thousand yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Deductible amount (1 accident)")}
            </TableCell>
            <TableCell className="">0 {t("thousand yen")}</TableCell>
          </TableRow>
        </Table>

        <SelectInput
          options={selectOptions.accidentsPaymentLimit}
          label={t("Payment limit (1 request/during period) (1,000 yen)")}
          onChange={partial(
            handleInputChange,
            fieldNames.accidentsPaymentLimit
          )}
          value={inputData[fieldNames.accidentsPaymentLimit]}
        />

        <h3 className="mt-3 sub-header">{t("Economic accident")}</h3>
        <Table>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Waiver amount (1 request)")}
            </TableCell>
            <TableCell className="">0 {t("thousand yen")}</TableCell>
          </TableRow>
        </Table>
      </div>

      <div className="flex-1 pl-2">
        <h1 className="text-lg mb-4 mt-4 main-header md:mt-0">
          {t("Other Special Agreements")}
        </h1>

        <h3 className="mt-3 sub-header">
          {t("Lawyer's fees collateral special agreement")}
        </h3>
        <p>{t("Personal Property Damage")}</p>

        <Table>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (1 person)")}
            </TableCell>
            <TableCell className="">
              {t("1,000 thousand yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (for one accident/period)	")}
            </TableCell>
            <TableCell className="">
              {t("3,000 thousand yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Deductible amount (1 accident)	")}
            </TableCell>
            <TableCell className="">{t("0 thousand yen")}</TableCell>
          </TableRow>
        </Table>

        <h3 className="mt-3 sub-header">{t("Economic damage")}</h3>
        <Table>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (1 accident)")}
            </TableCell>
            <TableCell className="">100 {t("thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Payment limit (during the period)")}
            </TableCell>
            <TableCell className="">300 {t("thousand yen")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-blue ">
              {t("Deductible amount (1 accident)")}
            </TableCell>
            <TableCell className="">0 {t("thousand yen")}</TableCell>
          </TableRow>
        </Table>

        {inputData[fieldNames.selectServiceUserSearchClause] === "○" && (
          <>
            <h3 className="my-3 sub-header">
              {t("Service User Search Expense Guarantee Special Contract")}
            </h3>
            <Table>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 person)")}
                </TableCell>
                <TableCell className="">
                  200 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 accident)")}
                </TableCell>
                <TableCell className="">
                  1,000 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Reward payment limit (1 person/1 company)")}
                </TableCell>
                <TableCell className="">
                  5 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Deductible amount (1 accident)")}
                </TableCell>
                <TableCell className="">
                  0 {t("thousand yen")}
                </TableCell>
              </TableRow>
            </Table>
          </>
        )}

        {inputData[fieldNames.selectInfectiousDiseaseClause] === "○" && (
          <>
            <h3 className="my-3 sub-header">
              {t("Specified Infectious Diseases Coverage Special Contract")}
            </h3>
            <Table>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 accident)")}
                </TableCell>
                <TableCell className="">
                  1,000 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Deductible amount (1 accident)")}
                </TableCell>
                <TableCell className="">
                  0 {t("thousand yen")}
                </TableCell>
              </TableRow>
            </Table>
          </>
        )}

        {inputData[fieldNames.selectVictimMedicalExpenseClause] === "○" && (
          <>
            <h3 className="my-3 sub-header">
              {t("Victim treatment cost guarantee rider")}
            </h3>
            <Table>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 person)")}
                </TableCell>
                <TableCell className="">
                  500 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (for one accident/period)")}
                </TableCell>
                <TableCell className="">
                  10,000 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Deductible amount (1 accident)")}
                </TableCell>
                <TableCell className="">
                  0 {t("thousand yen")}
                </TableCell>
              </TableRow>
            </Table>
          </>
        )}

        {inputData[fieldNames.selectLitigationCostClause] === "○" && (
          <>
            <h3 className="my-3 sub-header">{t("Litigation cost guarantee clause")}</h3>
            <Table>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 accident/1 claim)")}
                </TableCell>
                <TableCell className="">
                  10,000 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Deductible amount (1 accident/1 claim)")}
                </TableCell>
                <TableCell className="">
                  0 {t("thousand yen")}
                </TableCell>
              </TableRow>
            </Table>
          </>
        )}

        {inputData[fieldNames.selectInitialSupportCaluse] === "○" && (
          <>
            <h3 className="my-3 sub-header">
              {t("Initial support cost guarantee rider")}
            </h3>
            <Table>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Payment limit (1 accident/1 claim)")}
                </TableCell>
                <TableCell className="">
                  10,000 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Physical disability visit fee (1 person)")}
                </TableCell>
                <TableCell className="">
                  100 {t("thousand yen")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-blue ">
                  {t("Deductible amount (1 accident/1 claim)")}
                </TableCell>
                <TableCell className="">
                  0 {t("thousand yen")}
                </TableCell>
              </TableRow>
            </Table>
          </>
        )}
      </div>
    </div>
  );
};
