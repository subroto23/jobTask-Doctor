const Button = ({ props }: Record<string, string>) => {
  return (
    <>
      <button className="bg-[#3A643B] rounded-xl md:p-[16px_39px_20px_39px] p-2 text-white text-xl">
        {props}
      </button>
    </>
  );
};

export default Button;
