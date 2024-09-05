import Image from "next/image";
import { GenerateReport } from "../utils/interface";

interface Props{
  data: GenerateReport;
}

const PhotoReport = ({ data }: Props) => {

  return (
    <section className="mt-10">
      <div className="bg-[#DCEAF7]">
        <p className="font-bold text-lg text-center">PHOTO REPORT</p>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-7 md:grid-cols-3">
        {data.REPORT_PHOTOS.map((photo, index)=>(
            <Image
                key={index}
                src={photo}
                alt={photo}
                className="w-[200px] h-[200px] md:w-[300px]"
                unoptimized   
                width={200}
                height={200}         
            />
        ))}
      </div>
    </section>
  )
}

export default PhotoReport
