const BackgroundContainer = ({ children, color, shade, textColor }) => {
  return (
    <div
      className={`background-container bg-${color}-${shade} text-clr-${textColor}`}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default BackgroundContainer;
