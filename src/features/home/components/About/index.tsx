import Image from "next/image";
import { FoodCategories } from "./FoodCategories";

export function About() {
  return (
    <section className="bg-white flex flex-col">
      <div className="flex flex-col py-16 gap-28 w-full sm:w-[90%] lg:w-[80%] mx-auto">
        <FoodCategories />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-3 sm:px-0">
          <Image
            src="/images/super-bag.png"
            alt="super-bag"
            width={303}
            height={322}
            className="max-w-[200px] sm:max-w-[350px] w-full h-auto object-cover"
            quality={100}
          />

          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-orange font-montserrat font-extrabold text-xl">APRESENTAMOS</h3>
              <h1 className="text-green text-4xl sm:text-5xl font-montserrat font-extrabold">
                Surprise Bag
              </h1>
            </div>

            <p className="text-zinc-500 text-sm sm:text-base">
              A nossa app é o maior marketplace do mundo para salvar excedente alimentar. Conectamos
              utilizadores a estabelecimentos locais para que estes possam salvar alimentos que
              acabaram por não ser vendidos.
            </p>

            <p className="text-zinc-500 text-sm sm:text-base">
              As Surprise Bags são vendidas a 25-50% do seu valor original. O nosso parceiro
              rentabiliza as suas quebras ao mesmo tempo que recebe novos clientes na sua loja e que
              tem um impacto positivo no nosso planeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { FoodCategories } from "./FoodCategories";

// export function About() {
//   return (
//     <section className="bg-white flex flex-col">
//       <div className="flex flex-col py-16 gap-28 w-full sm:w-[80%] mx-auto">
//         <FoodCategories />
//         <div className="flex items-center gap-8">
//           <Image
//             src="/images/super-bag.png"
//             alt="super-bag"
//             width={303}
//             height={322}
//             className="max-w-[350px] w-full h-full object-cover"
//             quality={100}
//           />

//           <div className="flex flex-col space-y-6">
//             <div className="space-y-2">
//               <h3 className="text-orange font-montserrat font-extrabold text-xl">APRESENTAMOS</h3>
//               <h1 className="text-blue text-5xl font-montserrat font-extrabold">Surprise Bag</h1>
//             </div>

//             <p className="text-zinc-500 text-base">
//               A nossa app é o maior marketplace do mundo para salvar excedente alimentar. Conectamos
//               utilizadores a estabelecimentos locais para que estes possam salvar alimentos que
//               acabaram por não ser vendidos.
//             </p>

//             <p className="text-zinc-500 text-base">
//               As Surprise Bags são vendidas a 25-50% do seu valor original. O nosso parceiro
//               rentabiliza as suas quebras ao mesmo tempo que recebe novos clientes na sua loja e que
//               tem um impacto positivo no nosso planeta.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
