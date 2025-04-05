import { FoodCategory } from "./FoodCategory";

const foodCatetories = [
  "/images/food/categories/img-1.png",
  "/images/food/categories/img-2.png",
  "/images/food/categories/img-3.png",
  "/images/food/categories/img-4.png",
  "/images/food/categories/img-5.png",
  "/images/food/categories/img-6.png",
  "/images/food/categories/img-7.png",
];

export function FoodCategories() {
  return (
    <div className="flex items-stretch gap-4">
      {foodCatetories.map((item, index) => (
        <FoodCategory key={index} img={item} />
      ))}
    </div>
  );
}
