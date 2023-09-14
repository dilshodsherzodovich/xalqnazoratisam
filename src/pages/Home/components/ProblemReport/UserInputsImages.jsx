import FileUploadInput from "./FileUploadInput";

function UserInputsImages() {
  const names = ["image1", "image2", "image3", "image4", "image5"];

  const renderImageUpload = () => {
    return names.map((item, index) => {
      return <FileUploadInput name={item} key={index} />;
    });
  };

  return (
    <div className="user-inputs-images flex items-center gap-8 mt-4">
      {renderImageUpload()}
    </div>
  );
}

export default UserInputsImages;
