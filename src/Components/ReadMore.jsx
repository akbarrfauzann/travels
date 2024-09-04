import { useState } from "react";

function ReadMoreText({ text, maxLength }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="max-w-md">
      <span className="text-gray-500 block mb-2 text-center xl:text-left">{isReadMore ? text : `${text.substring(0, maxLength)}...`}</span>
      <div className="flex justify-center xl:justify-start">
        <button className="text-sm bg-white text-black border-black hover:bg-black hover:text-white border-2 rounded-xl px-4 py-2 mt-2" onClick={toggleReadMore} type="button">
          {isReadMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default ReadMoreText;
