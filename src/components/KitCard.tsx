import { TfiPackage } from "react-icons/tfi";

interface Props {
  kit: string;
  description: string;
}

export const KitCard = ({ kit, description }: Props) => {
  return (
    <button className="p-4 border-2 border-neutral-200 flex gap-4 items-center w-full rounded-xl">
      <div className="bg-neutral-100 p-3 rounded-xl">
        <TfiPackage />
      </div>
      <div>
        <h3 className="font-bold text-lg text-start">{kit}</h3>
        <p className="text-sm text-neutral-500 text-start">{description}</p>
      </div>
    </button>
  );
};
