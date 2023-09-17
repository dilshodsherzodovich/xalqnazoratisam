import { useEffect, useRef, useState } from "react";
import PrimaryInput from "@components/PrimaryInput";
import PrimaryBtn from "@components/PrimaryBtn";
import CustomSelect from "./CustomSelect";
import YandexMap from "./YandexMap";

import { useDispatch, useSelector } from "react-redux";
import { fetchRegions } from "../../../../redux/slices/regions.slice";
import {
  createProblem,
  setActiveRegion,
  setManzil,
  clearRes,
} from "../../../../redux/slices/problemCreate.slice";
import { gotToStep } from "../../../../redux/slices/reportStatus.slice";
import { createSelector } from "reselect";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { setIsAuthOpen } from "../../../../redux/slices/modals.slice";

function LocationForm() {
  const formRef = useRef();
  const [cookies, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  const { mahallas, loading } = useSelector((state) => state.regions);
  const {
    activeRegion,
    manzil,
    location,
    description,
    muammo_turi,
    res,
    createLoading,
  } = useSelector((state) => state.problemCreate);
  const { images } = useSelector((state) => state.problemImages);

  const selectedMahallas = createSelector(
    (state) => state.regions.mahallas,
    (state) => state.problemCreate.activeRegion,
    (mahallas, activeRegion) => {
      return mahallas.filter((item) => item.id === activeRegion.value)[0];
    }
  );
  const activeMahallas = useSelector(selectedMahallas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mahallas.length > 0) return;
    dispatch(fetchRegions());

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (res.id) {
      toast.success("Arizangiz muvaffaqqiyatli jo'natildi", {
        position: "top-center",
        theme: "colored",
      });
      dispatch(clearRes());
      dispatch(gotToStep(0));
    } else if (res.error) {
      if (res.error.code === "token_not_valid") {
        removeCookie("access", { path: "/" });
        removeCookie("refresh", { path: "/" });
        dispatch(setIsAuthOpen(true));
      }
      dispatch(clearRes());
    }

    //eslint-disable-next-line
  }, [res]);

  const handleProblemSubmit = () => {
    if (!manzil || !muammo_turi.id || !description) return;
    const home = new FormData(formRef.current).get("uy");
    const formData = new FormData();
    formData.append("manzil", manzil.value);
    formData.append("muammo_turi", muammo_turi.id);
    formData.append("description", description);
    const sendingLocation = location ? location.join(",") : "" + ` ${home}`;
    formData.append("location", sendingLocation);
    if (images.length > 0) {
      images.forEach((item) => {
        formData.append("images", item.file);
      });
    }
    dispatch(createProblem({ data: formData, token: cookies.access }));
  };

  return (
    <div className="locationForm w-[60%] mx-auto">
      <form ref={formRef} className="form-location flex flex-col mt-8">
        <label className="mb-2" htmlFor="city">
          Shahar
        </label>
        <PrimaryInput
          id={"city"}
          name="city"
          type={"text"}
          value={"Samarqand"}
          required={true}
          isDefault={true}
        />
        <div className="mb-8">
          <label className="mb-2" htmlFor="district">
            Tuman
          </label>
          <CustomSelect
            arrayOptions={mahallas}
            loading={loading}
            dispatchFunction={setActiveRegion}
            value={activeRegion}
            text="region"
          />
        </div>

        <div className="mb-8">
          <label className="mb-2" htmlFor="district">
            Mahalla
          </label>
          <CustomSelect
            isDisabled={activeRegion.id ? false : true}
            arrayOptions={activeMahallas?.mahalla}
            loading={loading}
            dispatchFunction={setManzil}
            value={manzil}
          />
        </div>

        <label className="mb-2" htmlFor="uy">
          Uy
        </label>
        <PrimaryInput
          id={"uy"}
          name="uy"
          type={"text"}
          required={true}
          placeHolder="Uy manzilingizni kiriting"
        />
        <div className="map-container mb-4 rounded-xl overflow-hidden">
          <YandexMap />
        </div>
        <div className="flex">
          <PrimaryBtn
            disabled={!manzil || !muammo_turi.id || !description}
            text={createLoading ? "Yuborilmoqda..." : `Xabar yuborish`}
            className="inline"
            type="button"
            onClick={() => {
              handleProblemSubmit();
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default LocationForm;
