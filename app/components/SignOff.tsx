import Image from "next/image";
import { GenerateReport } from "../utils/interface";
import signature1 from '@/app/utils/firma1.png';
import signature2 from '@/app/utils/firma2.png';

interface Props{
  data: GenerateReport;
}

const SignOff = ({ data }: Props) => {
    return (
        <section className="my-10">
            <div className="bg-[#DCEAF7]">
                <p className="font-bold text-lg text-center">SIGN OFF</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-10 md:gap-0 md:grid md:grid-cols-2 mt-7">
                <div className="w-fit text-center">
                    <Image
                        src={signature1}
                        alt={'signature1'}
                        className="w-[250px] h-[150px] md:w-[300px]"
                        unoptimized
                        width={200}
                        height={200}
                    />
                    <div className="h-[2px] bg-green-800"></div>
                    <p className="font-medium mt-1">I, Yackey Delgado,<br/>have reviewed and completed this report</p>
                </div>
                <div className="w-fit text-center">
                    <Image
                        src={signature2}
                        alt={'signature2'}
                        className="w-[250px] h-[150px] md:w-[300px]"
                        unoptimized
                        width={200}
                        height={200}
                    />
                    <div className="h-[2px] bg-green-800"></div>
                    <p className="font-medium mt-1">I, Edwin Romero,<br/>have reviewed and Approved this report</p>
                </div>
            </div>
        </section>
    )
}

export default SignOff
