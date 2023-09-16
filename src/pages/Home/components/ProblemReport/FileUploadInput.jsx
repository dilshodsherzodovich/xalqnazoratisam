import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addImage } from "../../../../redux/slices/problemImages.slice";

function FileUploadInput({ name }) {
  const fileRef = useRef(null);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  return (
    <div className="fileUploadItem cursor-pointer">
      <div
        onClick={() => {
          fileRef.current.click();
        }}
        className="label-preview w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] text-secondary flex items-center justify-center text-[22px] rounded-full border border-dashed border-secondary"
      >
        {image ? (
          <img
            src={image}
            alt="rasm"
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
        ) : (
          <i className="fa-solid fa-upload"></i>
        )}
      </div>
      <input
        onChange={(e) => {
          if (e.target.files[0].type.split("/")[0] !== "image") {
            toast.error("Iltimos rasm tanglang", {
              theme: "colored",
              position: "top-center",
            });
            return;
          }
          setImage(URL.createObjectURL(e.target.files[0]));
          dispatch(
            addImage({
              file: e.target.files[0],
              name,
            })
          );
        }}
        className="hidden"
        ref={fileRef}
        type="file"
        name={name}
        accept="image/*"
      />
    </div>
  );
}

export default FileUploadInput;
