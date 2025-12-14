interface Props {
  src?: string;
  title: string;
}

function Card({ src, title }: Props) {
  return (
    <div className="w-[20rem] h-[25rem] bg-white rounded-3xl flex flex-col items-center justify-center text-5xl shadow-xl mt-10 mr-10">
      <img
        className="w-[20rem] h-[20rem] flex-shrink-0"
        src={src}
        alt={title}
      />
      <div className="flex items-center h-full">
        <span className="text-base font-bold">{title}</span>
      </div>
    </div>
  );
}

export default Card;
