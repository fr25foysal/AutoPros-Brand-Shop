
const PrimaryBtn = ({text}) => {
    return (
      <div>
        <button className="border-[3.2px] px-4 py-2 bg-yellow text-[#000] hover:bg-transparent hover:text-yellow font-medium border-yellow ease-linear duration-200 ">
          {text}
        </button>
      </div>
    );
};

export default PrimaryBtn;