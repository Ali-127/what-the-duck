import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="grid grid-cols-2 place-items-center bg-secondary gap-20">
        <p className="p-10 w-180 text-5xl text-secondary-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Image
          src="/hero-duck.png"
          width={500}
          height={200}
          alt="White duck"
          loading="eager"
          className="w-auto h-auto rounded-full"
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
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
          />
          <Image
            src="/logos/louis-vuitton.png"
            width={60}
            height={60}
            alt="louis-vuitton"
            className="w-auto h-auto"
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
        <button className="p-2 bg-white w-30 rounded-2xl self-center my-5 hover:bg-amber-300 cursor-pointer">
          See more
        </button>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col items-center gap-10 bg-indigo-300 p-15">
        <h2 className="text-3xl">Testimonials</h2>
        <div className="flex felx-row gap-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </>
  );
}
