import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
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

        {/* CTA */}
        <div className="flex gap-30 col-span-2 justify-center bg-red-400 mb-20 ">
          <button className="bg-green-300 rounded-sm p-2">
            Start shopping
          </button>
          <button className="bg-green-300 rounded-sm p-2">Learn more</button>
        </div>
      </div>

      {/* Brands */}
      <div className="flex flex-col pt-5 bg-blue-300">
        <h2 className="self-center text-3xl">Brands</h2>
        <div className="flex justify-center gap-30 my-10">
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={80}
            height={80}
            alt="louis-vuitton"
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="flex flex-col bg-emerald-300">
        <h2 className="self-center text-3xl mt-6">Featured Products</h2>
        <div className="flex gap-5 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button className="p-2 bg-white w-30 rounded-2xl self-center my-5 hover:bg-amber-300">
          See more
        </button>
      </div>
    </>
  );
}

