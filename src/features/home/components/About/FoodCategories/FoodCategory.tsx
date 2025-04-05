import Image from "next/image";

interface FoodCategoryProps {
  img: string;
}

export function FoodCategory({ img }: FoodCategoryProps) {
  return (
    <div className="bg-zinc-100 rounded-[4px] flex items-center justify-center w-full p-3">
      <Image src={img} alt="food-category" width={80} height={80} className="object-cover" />
    </div>
  );
}
