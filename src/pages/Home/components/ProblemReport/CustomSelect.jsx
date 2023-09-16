import Select from "react-select";
import { useDispatch } from "react-redux";
import { setManzil } from "../../../../redux/slices/problemCreate.slice";

function CustomSelect({
  loading,
  arrayOptions,
  dispatchFunction,
  value,
  text,
}) {
  const dispatch = useDispatch();

  const handleOptions = () => {
    let options = [];
    if (loading) {
      options = [
        {
          value: "Yuklnamoqda",
          label: "Yuklanmoqda",
          isDisabled: true,
        },
      ];
      return options;
    }

    if (!arrayOptions || arrayOptions.length <= 0) {
      options = [
        {
          value: "Ma'lumotlar mavjud emas",
          label: "Ma'lumotlar mavjud emas",
          isDisabled: true,
        },
      ];
      return options;
    }

    arrayOptions.forEach((item) => {
      options.push({
        value: item.id,
        label: item.name,
      });
    });

    return options;
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? "#fff"
        : state.isFocused
        ? "#b2b7d026"
        : "white",
      color: state.isDisabled ? "#999" : "#000",
      textAlign: state.isDisabled ? "center" : "start",
      "&:hover": {
        backgroundColor: state.isDisabled ? "#fff" : "#b2b7d026",
        // Change background color on hover
      },
    }),
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #b2b7d040", // Add border to the control panel
      borderRadius: "4px", // Add border-radius to the control panel
      boxShadow: "none", // Remove box-shadow
      backgroundColor: "#F8F9FA",
      padding: "0.75rem 1rem",
      borderColor: state.isFocused ? "#b2b7d040" : "#b2b7d040",
      color: "#11201D",
    }),
  };

  return (
    <Select
      onChange={(e) => {
        dispatch(dispatchFunction(e));
        if (text === "region") {
          dispatch(setManzil(null));
        }
      }}
      options={handleOptions()}
      styles={customStyles}
      value={value || null}
      placeholder="Tanlang"
    />
  );
}

export default CustomSelect;
