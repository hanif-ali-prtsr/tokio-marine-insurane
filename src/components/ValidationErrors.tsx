interface Props {
  errors?: any[];
}
export const ValidationErrors = (props: Props) => {
  const { errors } = props;

  if (errors?.length) {
    return (
      <div className="mt-1">
        {errors.map((error, index) => (
          <p
            className="text-red-500 text-xs"
            style={{ color: error.color }}
            key={index}
          >
            *{" "}
            {/* The API does not seem to have translation for this particular string. So I'm hardcoding the 
            Japanese translation here. */}
            {error.message === "Field is required"
              ? "このフィールドは必須です"
              : error.message}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
