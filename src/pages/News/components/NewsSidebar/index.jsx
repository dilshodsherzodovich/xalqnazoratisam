import classNames from "classnames";
import { useSelector } from "react-redux";

function NewsSidebar() {
  const { categories, activeCategoryIdx } = useSelector(
    (state) => state.newsCategories
  );

  const renderCategories = () => {
    return categories.map((item, index) => {
      const itemClassName = classNames(
        "category-box px-5 py-3 cursor-pointer mb-1  hover:text-[#151515] transition-all duration-500 ease hover:bg-[white]",
        {
          "text-[#888]": index !== activeCategoryIdx,
          "text-[#151515] bg-[white]": index === activeCategoryIdx,
        }
      );

      return (
        <div className={itemClassName} key={index}>
          <p>{item}</p>
        </div>
      );
    });
  };

  return (
    <div className="categories col-span-4 lg:col-span-1">
      <div className="search-box flex items-center gap-4 px-12 rounded-[5px] bg-primary text-white mb-12">
        <input
          type="text"
          placeholder="Qidiring"
          className="bg-transparent outline-none w-full h-[4.5rem] placeholder:text-[white] placeholder:text-[14px]"
        />
        <i className="fa-solid fa-magnifying-glass text-[20px]"></i>
      </div>
      <div className="categories-list px-[30px] pt-[50px] pb-[20px] bg-[#f3f3f3]">
        <p className="pl-5 mb-6 text-[20px] font-[700]">Kategoriyalar</p>
        {renderCategories()}
      </div>
    </div>
  );
}

export default NewsSidebar;
