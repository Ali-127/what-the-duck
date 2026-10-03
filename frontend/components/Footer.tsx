import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-amber-300 p-10">
      <Image
        src="/cool-duck.png"
        width={200}
        height={100}
        className="w-auto h-auto bg-green-100 rounded-full"
        alt="cool duck"
      />
      <h3 className="text-5xl text-green-800">We are the cool ducks!</h3>
      <div className="flex flex-row gap-20 justify-end text-sm mt-10">
        <ul>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
