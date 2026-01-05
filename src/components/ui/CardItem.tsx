import ImageIcon from "@mui/icons-material/Image";
import MoreButton from "./MoreButton";

interface MyClosetItems {
  id: number;
  image: string;
  category: string;
  title: string;
  color: string;
  size: string;
  season: string;
  details: string;
}

interface CardItemProps {
  item: MyClosetItems;
}

function CardItem({ item }: CardItemProps) {
  return (
    <div className="group w-full aspect-[4/5] bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500 relative border border-gray-100">
      <div className="relative overflow-hidden h-3/4 bg-gray-50">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] grayscale-[20%] group-hover:grayscale-0"
          />
        ) : (
          <div
            className="relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
            style={{
              backgroundColor: "#F3F4F6",
            }}
          >
            <div className="relative z-10 text-center">
              <ImageIcon
                sx={{ fontSize: 48, color: "#9ca3af", opacity: 0.5 }}
              />
              <p className="mt-2 text-xs text-gray-400">이미지 없음</p>
            </div>
          </div>
        )}
      </div>
      <MoreButton />
      <div className="flex flex-col items-center justify-center gap-2 px-5 h-1/4">
        <span className="text-xs font-semibold tracking-wide text-center text-gray-900 line-clamp-1">
          {item.title}
        </span>
      </div>
    </div>
  );
}

export default CardItem;
