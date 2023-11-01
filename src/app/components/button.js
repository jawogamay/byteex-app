const renderButtonType = (type) => {
  if (type === "primary") {
    return "bg-secondary text-white";
  }
};
const Button = ({ type = "primary", children, customClass = "" }) => {
  return (
    <button
      className={`py-2 text-center px-8 text-lg ${renderButtonType(
        type
      )} ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
