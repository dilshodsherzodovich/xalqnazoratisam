import PrimaryInput from "@components/PrimaryInput";
import PrimaryBtn from "@components/PrimaryBtn";

function LocationForm() {
  return (
    <div className="locationForm w-[60%] mx-auto">
      <form className="form-location flex flex-col mt-8">
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

        <label className="mb-2" htmlFor="district">
          Tuman
        </label>
        <PrimaryInput
          id={"district"}
          name="district"
          type={"text"}
          required={true}
        />

        <label className="mb-2" htmlFor="mahalla">
          Mahalla
        </label>
        <PrimaryInput
          id={"mahalla"}
          name="mahalla"
          type={"text"}
          required={true}
        />

        <label className="mb-2" htmlFor="uy">
          Uy
        </label>
        <PrimaryInput id={"uy"} name="uy" type={"text"} required={true} />
        <div className="flex">
          <PrimaryBtn
            disabled={true}
            text="Xabar yuborish"
            className="inline"
          />
        </div>
      </form>
    </div>
  );
}

export default LocationForm;
