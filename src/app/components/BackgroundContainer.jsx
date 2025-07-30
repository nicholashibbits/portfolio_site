const BackgroundContainer = ({
  children,
  color,
  shade,
  textColor,
  diagonal = 3,
}) => {
  return (
    <div
      className={`background-container bg-${color}-${shade} text-clr-${textColor} diagonal-bg-${diagonal}`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
