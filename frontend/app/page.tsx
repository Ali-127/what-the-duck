import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center bg-red-400 gap-20 pt-10">
        <p className="p-10 w-180 text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          ratione nemo, tempore molestiae sapiente soluta accusamus alias, ipsam
          quasi non qui harum, suscipit ullam autem sit omnis cupiditate?
          Necessitatibus, ullam. lorem
        </p>
        <Image
          src="/white-duck.png"
          width={300}
          height={20}
          alt="White duck"
          loading="eager"
          className="w-auto h-auto"
        />
        <div className="flex gap-30 col-span-2 justify-center bg-red-400 mb-20 ">
          <button className="bg-green-300 rounded-sm p-2">Start shopping</button>
          <button className="bg-green-300 rounded-sm p-2">Learn more</button>
        </div>
      </div>
    </>
  );
}
