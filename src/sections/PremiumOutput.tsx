import { useMemo } from "react";
import { PieChart } from "../components/PieChart";
import { Table, TableCell, TableRow } from "../components/Table";
import { t } from "../i18nConfig";
import { raterFieldNames } from "../utils";

interface Props {
  raterData: Record<any, any>;
}

export const PremiumOutput = (props: Props) => {
  const { raterData } = props;

  const chartsData = useMemo(() => getChartsData(raterData), [raterData]);
  const chartHasData = useMemo(
    () =>
      chartsData.map((premiumData) => premiumData.value).some((value) => value),
    [chartsData]
  );

  return (
    <div className="md:w-3/4 m-auto flex mt-2 flex-col md:flex-row">
      <div className="mt-4 flex-1 md:w-1/2">
        <Table>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t("Basic contract premium *2")}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.baseContractPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t(
                "Lawyer's fees collateral special clause (for business) insurance premium"
              )}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.lawyerFeesCollateral]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t(
                "Service User Search Expense Guarantee Covenant Insurance Premium"
              )}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.serviceUserSearchPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t(
                "Specified Infectious Disease Coverage Covenant Insurance premium"
              )}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.infectiousDiseasePremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t(
                "Victim medical expenses collateral covenant Insurance premium"
              )}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.victimMedicalExpensesPremium]}{" "}
              {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t("Litigation cost guarantee covenant insurance premium")}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.litigationCostPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t("1 time premium")}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.oneTimePremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t("Total premium paid")}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.totalPremiumPaid]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink font-bold">
              {t("Minimum premium paid")}
            </TableCell>
            <TableCell className="font-bold text-right">
              {raterData[raterFieldNames.minmumPremiumPaid]} {t("Yen")}
            </TableCell>
          </TableRow>
        </Table>
      </div>
      <div className="flex-1 flex items-center justify-center mt-8 max-h-[370px] md:w-3/4 md:p-4 md:mt-0">
        {chartHasData ? (
          <PieChart data={chartsData} label={t("Cost")} />
        ) : (
          <p className="p-8 text-center text-pink-700">
            {t("Please calculate the premium to show chart")}
          </p>
        )}
      </div>
    </div>
  );
};

const getPremiumField = (raterData: Record<any, any>, fieldName: string) => {
  const value = raterData[fieldName];
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    return parseFloat(value.replace(",", ""));
  } else return 0;
};

const getChartsData = (raterData: Props["raterData"]) => {
  const basicContractPremium = getPremiumField(
    raterData,
    raterFieldNames.baseContractPremium
  );
  const lawyerFeesCollateral = getPremiumField(
    raterData,
    raterFieldNames.lawyerFeesCollateral
  );
  const serviceUserSearchPremium = getPremiumField(
    raterData,
    raterFieldNames.serviceUserSearchPremium
  );
  const infectiousDiseasePremium = getPremiumField(
    raterData,
    raterFieldNames.infectiousDiseasePremium
  );
  const victimMedicalExpensesPremium = getPremiumField(
    raterData,
    raterFieldNames.victimMedicalExpensesPremium
  );
  const litigationCostPremium = getPremiumField(
    raterData,
    raterFieldNames.litigationCostPremium
  );

  const totalPremium =
    basicContractPremium +
    lawyerFeesCollateral +
    serviceUserSearchPremium +
    infectiousDiseasePremium +
    victimMedicalExpensesPremium +
    litigationCostPremium;

  return [
    { label: t("Basic contract premium *2") + `  (${getPercentageString(basicContractPremium, totalPremium)})`, value: basicContractPremium },
    {
      label: t(
        "Lawyer's fees collateral special clause (for business) insurance premium"
      ) + `  (${getPercentageString(lawyerFeesCollateral, totalPremium)})`,
      value: lawyerFeesCollateral,
    },
    {
      label: t(
        "Service User Search Expense Guarantee Covenant Insurance Premium"
      ) + `  (${getPercentageString(serviceUserSearchPremium, totalPremium)})`,
      value: serviceUserSearchPremium,
    },
    {
      label: t(
        "Specified Infectious Disease Coverage Covenant Insurance premium"
      ) + `  (${getPercentageString(infectiousDiseasePremium, totalPremium)})`,
      value: infectiousDiseasePremium,
    },
    {
      label: t("Victim medical expenses collateral covenant Insurance premium") + `  (${getPercentageString(victimMedicalExpensesPremium, totalPremium)})`,
      value: victimMedicalExpensesPremium,
    },
    {
      label: t("Litigation cost guarantee covenant insurance premium") + `  (${getPercentageString(litigationCostPremium, totalPremium)})`,
      value: litigationCostPremium,
    },
  ];
};

const getPercentageString = (value: number, total: number) => { 
  const percentage = ((value / total) * 100).toFixed(1);; 
  return `${percentage}%`;
}