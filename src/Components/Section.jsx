const Section = ({
  children,
  className,
  id,
  padding = "py-36",
  defaultStyle = true,
}) => {
  const customClassName = `${
    defaultStyle && "container mx-auto"
  } ${padding} ${className}`;
  return (
    <section className={customClassName} id={id}>
      {children}
    </section>
  );
};

export default Section;
