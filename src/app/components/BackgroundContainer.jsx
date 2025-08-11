const BackgroundContainer = ({ children, color, shade, textColor }) => {
  return (
    <div
      className={`background-container bg-${color}-${shade} text-clr-${textColor} diagonal`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
