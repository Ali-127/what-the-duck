import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="flex gap-5 bg-red-400 w-100 rounded-2xl p-2 shadow-2xl">
      <Image
        src="/stock-profile.png"
        width={100}
        height={80}
        className="w-auto h-auto bg-emerald-300 rounded-2xl"
        alt="stock-pic"
      />
      <p className="w-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
        recusandae dicta ea, ad quam maiores eius?
      </p>
    </div>
  );
}
