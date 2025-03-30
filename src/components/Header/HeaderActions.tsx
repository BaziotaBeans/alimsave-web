import { CartSVG } from "../shared/customIcon/cart";

export function HeaderActions() {
  return (
    <div className="flex items-center  h-full bg-yellow">
      <button className="bg-blue-darker h-full w-[112px] text-white font-bold cursor-pointer transition-all hover:bg-blue-darker">
        Entrar
      </button>

      <button className="flex items-center gap-2 w-[192px] justify-center">
        <span className="bg-[#FFFDC8] rounded-full p-1 flex items-center justify-center h-12 w-12">
          <CartSVG />
        </span>

        <div className="flex flex-col gap-1 items-start text-blue-dark">
          <span className="text-xs">MEU CARRINHO</span>
          <span className="text-sm font-bold">Total 5 item</span>
        </div>
      </button>
    </div>
  );
}
