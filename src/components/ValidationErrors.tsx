interface Props {
  errors?: any[];
}
export const ValidationErrors = (props: Props) => {
  const { errors } = props;

  if (errors?.length) {
    return (
      <div className="mt-1">
        {errors.map((error, index) => (
          <p className="text-red-500 text-xs" key={index}>* {error.message}</p>
        ))}
      </div>
    );
  }
	return null
};
