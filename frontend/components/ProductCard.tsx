import Image from "next/image";

export default function ProductCard() {
  return (
    <article className="bg-pink-300 m-5 w-40 h-60 p-5 gap-5 flex flex-col items-center rounded-2xl">
      <h3>product 1</h3>
      <Image
        src="/products/sunglasses.png"
        width={70}
        height={70}
        alt="sunglasses"
      />
      <ul className="self-start">
        <li>feature 1</li>
        <li>feature 2</li>
        <li>feature 3</li>
      </ul>
    </article>
  );
}
