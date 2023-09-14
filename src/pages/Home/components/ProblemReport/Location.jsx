import ChangeableSectionHeader from "./ChangeableSectionHeader";
import LocationForm from "./LocationForm";

function Location() {
  return (
    <div className="choose-location p-12 relative border-[3px] rounded-[30px] border-primary mt-[100px]">
      <ChangeableSectionHeader backStep={1} />
      <LocationForm />
    </div>
  );
}

export default Location;
