const WithoutBacgroundButton = ({ props }: Record<string, string>) => {
  return (
    <>
      <button className="border border-[#3A643B] rounded-xl md:p-[16px_39px_20px_39px] p-2  text-xl text-[#3A643B]">
        {props}
      </button>
    </>
  );
};

export default WithoutBacgroundButton;
