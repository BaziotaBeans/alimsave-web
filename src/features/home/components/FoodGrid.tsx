export function FoodGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-1.png"
            width="232"
            height="290"
            alt="Image 01"
          />
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-2.png"
            width="232"
            height="290"
            alt="Image 02"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-3.png"
            width="232"
            height="174"
            alt="Image 03"
          />
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-6.png"
            width="232"
            height="250"
            alt="Image 06"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-4.png"
            width="232"
            height="155"
            alt="Image 04"
          />
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-5.png"
            width="232"
            height="349"
            alt="Image 05"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-7.png"
            width="232"
            height="349"
            alt="Image 07"
          />
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow"
            src="/images/grid/img-8.png"
            width="232"
            height="155"
            alt="Image 08"
          />
        </div>
      </div>
    </div>
  );
}
