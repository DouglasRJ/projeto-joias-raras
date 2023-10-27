export default function Banner() {
  return (
    <>
      <div className="px-12 text-white bg-[url('/banner.jpg')] bg-cover">
        <div className="py-[35%]">
          <h1 className="text-8xl mb-10">Joias Raras</h1>
          <h2 className="text-2xl">Volta Redonda</h2>
        </div>
      </div>
      <div className="bg-neutral-100 grid grid-cols-2 gap-12 p-12">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorem illum dolores dolorum suscipit aspernatur sed earum qui
          nesciunt eum, at et assumenda labore eveniet a vitae ducimus facilis
          molestiae.
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorem illum dolores dolorum suscipit aspernatur sed earum qui
          nesciunt eum, at et assumenda labore eveniet a vitae ducimus facilis
          molestiae.
        </div>
      </div>
    </>
  );
}
