const BackgroundContainer = ({ children, color, shade, textColor }) => {
  return (
    <div
      className={`background-container bg-${color}-${shade} text-clr-${textColor}`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
