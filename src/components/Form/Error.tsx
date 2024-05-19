const Error: React.FC = () => {
  return (
    <div className="fixed top-8 flex h-[48px] w-[343px] items-center rounded-full bg-red-100 px-2 md:h-[32px] md:w-[565px]">
      <div className="h-[24px] w-[54px] rounded-full bg-white">
        <p className="text-center font-semibold text-red-800">Error</p>
      </div>

      <div className=" flex h-[40px] w-[243px] flex-1 items-center justify-center">
        <p className="text-center text-sm font-normal text-red-800">
          Failed to submit. Please ensure your details are correct or try again
          later.
        </p>
      </div>
    </div>
  );
};

export default Error;
