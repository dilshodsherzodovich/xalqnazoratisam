import { formatDate } from "../../../../utils/formdate";

function NewsCard({ title, description, file, sana }) {
  return (
    <div className="news-card col-span-6 md:col-span-3 shadow-2xl shadow-[#d4d1d1] rounded-md overflow-hidden">
      <div className="img-box w-full h-[20rem] overflow-hidden">
        <img
          src={file}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="content-box bg-white p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-[1.5rem] leading-[2.7rem] font-[700] mb-[10px] text-[#151515]">
            {title}
          </h3>
          <p className="text-[#888] leading-[2rem] font-[400]">{description}</p>
        </div>
        <div className="border-t border-t-[#ddd] mt-4 pt-4 text-[#888] text-[14px] flex items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <p>{formatDate(sana)}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
