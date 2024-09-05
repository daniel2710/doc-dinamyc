import { GenerateReport } from "../utils/interface";

interface Props{
  data: GenerateReport;
}

const AttendanceSummary = ({ data }: Props) => {

  return (
    <section className="mt-10">
      <div className="bg-[#DCEAF7]">
        <p className="font-bold text-lg text-center">ATTENDANCE SUMMARY</p>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#FBE3D6] uppercase">
              <th className="border border-black px-4 py-[2px] text-left">#</th>
              <th className="border border-black px-4 py-[2px] text-left">NAME</th>
              <th className="border border-black px-4 py-[2px] text-center">POSITION</th>
              <th className="border border-black px-4 py-[2px] text-center">ATTENDANCE</th>
            </tr>
          </thead>
          <tbody>
            {data.ATTENDANCE.map((attendance, index) => (
              <tr key={index} className="hover:bg-gray-100 font-medium">
                <td className="border border-black px-4 py-[2px]">{index + 1}</td>
                <td className="border border-black px-4 py-[2px]">{attendance.NAME}</td>
                <td className="text-center border border-black px-4 py-[2px]">{attendance.POSITION}</td>
                <td className="text-center border border-black px-4 py-[2px]">{attendance.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AttendanceSummary
