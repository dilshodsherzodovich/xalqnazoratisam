import House from "@assets/icons/house.svg";
import Road from "@assets/icons/road.svg";
import PublicTransport from "@assets/icons/publicTransport.svg";
import Commerce from "@assets/icons/commerce.svg";
import PublicPlace from "@assets/icons/publicPlace.svg";

//external libraries
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveCategory } from "../../../../redux/slices/problemCategorirs.slice";
import CategoryLoader from "../../../../components/SkeletCategoryLoader";

function ProblemCategory() {
  const { activeCategoryId, allCategories, loading } = useSelector(
    (state) => state.problemCategories
  );
  const dispatch = useDispatch();

  const categories = [
    {
      title: "Mening uyim",
      icon: House,
    },
    {
      title: "Mening yo'lim",
      icon: Road,
    },
    {
      title: "Savdo va oziq-ovqat",
      icon: Commerce,
    },
    {
      title: "Jamoat joylari",
      icon: PublicPlace,
    },
    {
      title: "Jamoat transporti",
      icon: PublicTransport,
    },
  ];

  const handleChangeCategory = (categoryId, title) => {
    dispatch(changeActiveCategory({ id: categoryId, title }));
  };

  const renderCategories = () => {
    if (loading) {
      return <CategoryLoader items={5} />;
    }

    if (!allCategories || !allCategories.length) {
      return <p>Ma`lumot topilmadi</p>;
    }

    return allCategories?.map((item) => {
      const categoryClassname = classNames(
        "col-span-1 p-[12px] border flex items-center cursor-pointer gap-3 rounded-[12px] transition-colors duration-500 hover:text-white hover:bg-[#5956e9] hover:border-[#5956e9]",
        {
          "text-white bg-[#5956e9] border-[#5956e9] active":
            item.id === activeCategoryId,
        }
      );
      return (
        <div
          key={item.id}
          className={categoryClassname}
          onClick={() => {
            handleChangeCategory(item.id, item.name);
          }}
        >
          <div className="icon-box overflow-hidden p-2 w-[50px] bg-white h-[50px] rounded-full flex items-center justify-center border border-[#B2B7D0]">
            <img className="w-full" src={item.icon} alt="" />
          </div>
          <strong className="font-[600] text-[14px] leading-[20px]">
            {item.name}
          </strong>
        </div>
      );
    });
  };

  const className =
    allCategories && allCategories.length
      ? `grid-cols-${allCategories.length}`
      : "grid-cols-5";

  return (
    <div
      className={`problems-category grid gap-[10px] mt-[-5.5rem] z-10 bg-white px-2 ${className}`}
    >
      {renderCategories()}
    </div>
  );
}

export default ProblemCategory;
