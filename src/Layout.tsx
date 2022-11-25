import { t } from "./i18nConfig";
import { QuoteForm } from "./QuoteForm";

export const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-cyan-700 p-6 text-white text-xl">
				{t("Nursing care service provider liability insurance premium calculation sheet (for agencies)")}
      </nav>
      <div className="flex justify-center">
				<QuoteForm />
			</div>
    </>
  );
};
