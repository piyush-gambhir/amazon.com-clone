type Props = {
  onClick: () => void;
  title: string;
};
export default function YellowButton({ onClick, title }: Props) {
  return (
    <div>
      <button
        className="w-full p-2 mt-3 bg-vibrant_yellow rounded-lg border-[1px] border-goldenrod_yellow cursor-pointer hover:bg-goldenrod_yellow"
        onClick={onClick}
      >
        <p className="text-sm font-normal">{title}</p>
      </button>
    </div>
  );
}
