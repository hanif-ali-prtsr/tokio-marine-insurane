interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button(props: Props) {
  const { label, onClick, disabled, className = "" } = props;

  return (
    <button
      className={`disabled:bg-gray-400 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
