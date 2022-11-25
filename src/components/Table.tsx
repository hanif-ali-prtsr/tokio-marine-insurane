import { PropsWithChildren } from "react";

export const Table = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="border min-w-full">
              <tbody>{props.children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableRow = (props: PropsWithChildren) => {
  return <tr className="bg-white border-b">{props.children}</tr>;
};

export const TableCell = (props: PropsWithChildren & { bold?: boolean }) => {
  const { bold = false } = props;
  const className = `px-6 py-2 text-sm ext-gray-900 ${
    bold ? "font-medium" : ""
  }`;

  return <td className={className}>{props.children}</td>;
};
