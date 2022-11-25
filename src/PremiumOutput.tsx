import { useMemo } from "react";
import { PieChart } from "./components/PieChart";
import { Table, TableCell, TableRow } from "./components/Table";
import { t } from "./i18nConfig";
import { fieldNames, raterFieldNames } from "./utils";

interface Props {
  raterData: Record<any, any>;
}

export const PremiumOutput = (props: Props) => {
  const { raterData } = props;

  const chartsData = useMemo(() => getChartsData(raterData), [raterData]);

  return (
    <div className="w-3/4 m-auto flex mt-8">
      <div className="mt-4 flex-1 w-1/2">
        <Table>
          <TableRow>
            <TableCell bold>{t("Basic contract premium *2	")}</TableCell>
            <TableCell>
              {raterData[raterFieldNames.baseContractPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t(
                "Lawyer's fees collateral special clause (for business) insurance premium	"
              )}
            </TableCell>
            <TableCell>
              {raterData[raterFieldNames.lawyerFeesCollateral]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t(
                "Service User Search Expense Guarantee Covenant Insurance Premium	"
              )}
            </TableCell>
            <TableCell>
              {raterData[raterFieldNames.serviceUserSearchPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t(
                "Specified Infectious Disease Coverage Covenant Insurance premium	"
              )}
            </TableCell>
            <TableCell>
              {raterData[raterFieldNames.infectiousDiseasePremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t(
                "Victim medical expenses collateral covenant Insurance premium	"
              )}
            </TableCell>
            <TableCell>
              {raterData[raterFieldNames.victimMedicalExpensesPremium]}{" "}
              {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>
              {t("Litigation cost guarantee covenant insurance premium	")}
            </TableCell>
            <TableCell>
              {raterData[raterFieldNames.litigationCostPremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>{t("1 time premium	")}</TableCell>
            <TableCell>
              {raterData[raterFieldNames.oneTimePremium]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>{t("Total premium paid	")}</TableCell>
            <TableCell>
              {raterData[raterFieldNames.totalPremiumPaid]} {t("Yen")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell bold>{t("Minimum premium paid	")}</TableCell>
            <TableCell>
              {raterData[raterFieldNames.minmumPremiumPaid]} {t("Yen")}
            </TableCell>
          </TableRow>
        </Table>
      </div>
      <div className="flex-1 flex items-center justify-center w-1/2 p-4">
        <PieChart data={chartsData} />
      </div>
    </div>
  );
};

const getPremiumField = (raterData: Record<any, any>, fieldName: string) => {
  const value = raterData[fieldName];
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    return parseFloat(value.replace(",", ""));
  } else return value;
};

const getChartsData = (raterData: Props["raterData"]) => {
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
  const oneTimePremium = getPremiumField(
    raterData,
    raterFieldNames.oneTimePremium
  );
  const totalPremium = getPremiumField(
    raterData,
    raterFieldNames.totalPremiumPaid
  );

  const sumPremium =
    lawyerFeesCollateral +
    serviceUserSearchPremium +
    infectiousDiseasePremium +
    victimMedicalExpensesPremium +
    litigationCostPremium +
    oneTimePremium;

  const otherPremium =
    totalPremium > sumPremium ? totalPremium - sumPremium : 0;

  return [
    { label: t("Basic contract premium *2	"), value: 10 },
    {
      label: t(
        "Lawyer's fees collateral special clause (for business) insurance premium	"
      ),
      value: lawyerFeesCollateral,
    },
    {
      label: t(
        "Service User Search Expense Guarantee Covenant Insurance Premium	"
      ),
      value: serviceUserSearchPremium,
    },
    {
      label: t(
        "Specified Infectious Disease Coverage Covenant Insurance premium	"
      ),
      value: infectiousDiseasePremium,
    },
    {
      label: t("Victim medical expenses collateral covenant Insurance premium	"),
      value: victimMedicalExpensesPremium,
    },
    {
      label: t("Litigation cost guarantee covenant insurance premium	"),
      value: litigationCostPremium,
    },
    {
      label: t("1 time premium	"),
      value: oneTimePremium,
    },
    {
      label: t("Others"),
      value: otherPremium,
    },
  ];
};
