const Gadgets = ({ width, height, left, top }) => {
  return (
    <img
      className="flex flex-col items-center justify-center"
      style={{ width, height, left, top }}
      src="/gadget_pdf.png"
    />
  );
};

export default Gadgets;
