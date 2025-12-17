interface Props {
  src?: string;
  title: string;
}

function Card({ src, title }: Props) {
  return (
    <div className="min-w-[7rem] max-w-[20rem] aspect-[4/5] bg-white rounded-3xl flex flex-col items-center shadow-xl">
      <img src={src} alt={title} />
      <div className="flex items-center justify-center flex-1">
        <span className="text-[clamp(0.75rem,1.5vw,1.125rem)] font-bold">
          {title}
        </span>
      </div>
    </div>
  );
}

export default Card;
