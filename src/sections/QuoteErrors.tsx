import { t } from "i18next";

interface Props {
  errors: string[];
}

export const QuoteErrors = (props: Props) => {
  const { errors } = props;
  return (
    <div className="flex items-center justify-center mt-4 mb-2 flex-col md:w-3/4 mx-auto border-2 p-4 border-red-100 text-center">
      <div className="text-lg mb-2">{t("Errors")}</div>
      <p className="text-xs text-blue-700">
        {t(
          "If there is an error, the premium will not be displayed Please check the regulations and enter correctly"
        )}
      </p>
      <p className="text-xs text-blue-700 mb-4">
        {t(
          "In the case of payment in installments, the insurnace premium for one installement will be displayed"
        )}
      </p>
      {errors.map((error) => {
        return <div className="text-red-600">*{error}</div>;
      })}
    </div>
  );
};
