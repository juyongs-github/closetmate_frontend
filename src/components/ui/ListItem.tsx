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

interface ListItemProps {
  item: MyClosetItems;
}

const itemTagKeys = ["category", "size", "season"] as const;

function ListItem({ item }: ListItemProps) {
  return (
    <div className="group flex w-full h-32 bg-[#FAFAFA] rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500 relative border border-gray-100">
      <div className="relative w-[7rem] md:w-[7rem] bg-gray-50 flex-shrink-0">
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
      <div className="flex flex-col justify-between w-full p-5 overflow-x-auto">
        <span className="text-sm font-semibold tracking-wide text-gray-900 line-clamp-1">
          {item.title}
        </span>
        <div className="flex gap-3 overflow-x-auto">
          {itemTagKeys.map((key) => (
            <div className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full w-fit whitespace-nowrap shrink-0">
              #<span>{item[key]}</span>
            </div>
          ))}
        </div>
      </div>
      <MoreButton />
    </div>
  );
}

export default ListItem;
