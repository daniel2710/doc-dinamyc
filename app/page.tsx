'use client'
import GeneratePDF from "./components/GeneratePDF";
import { data } from "./utils/data";

export default function Home() {

  return (
    <div className="p-2 border border-gray-600 max-w-[816px] md:px-5 m-4">
      <GeneratePDF
        data={data}
      />
    </div>
  );
}
