interface IButtonProps {
  props: string;
  style?: string;
}

const Button = ({ props, style }: IButtonProps) => {
  return (
    <>
      <button
        className={`bg-skin-button-green rounded-xl md:p-[16px_39px_20px_39px] p-2 text-white text-sm px-3 ${style}`}
      >
        {props}
      </button>
    </>
  );
};

export default Button;
