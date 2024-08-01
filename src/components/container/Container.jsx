const Container = ({ children, className }) => {
  return (
    <div
      className={`w-svw md:w-[90%] mx-auto px-5 md:px-0 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
