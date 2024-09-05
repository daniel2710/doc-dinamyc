import { GenerateReport } from "../utils/interface";

interface Props{
  data: GenerateReport;
}

const ProgressSummary = ({ data }: Props) => {

  return (
    <section className="mt-5">
      <div className="bg-[#DCEAF7]">
        <p className="font-bold text-lg text-center">PROGRESS SUMMARY</p>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#FBE3D6] uppercase">
              <th className="border border-black px-4 py-[2px] text-left">#</th>
              <th className="border border-black px-4 py-[2px] text-left">Description</th>
              <th className="border border-black px-4 py-[2px] text-center">Installed</th>
              <th className="border border-black px-4 py-[2px] text-center">Budgeted</th>
              <th className="border border-black px-4 py-[2px] text-center">Pending</th>
              <th className="border border-black px-4 py-[2px] text-center">Unit</th>
            </tr>
          </thead>
          <tbody>
            {data.MATERIALS.map((material, index) => (
              <tr key={index} className="hover:bg-gray-100 font-medium">
                <td className="border border-black px-4 py-[2px]">{index + 1}</td>
                <td className="border border-black px-4 py-[2px]">{material.name}</td>
                <td className="border border-black px-4 py-[2px] text-center">{material.quantity}</td>
                <td className="border border-black px-4 py-[2px] text-center">{data.BUDGET[index].ESTIMATED}</td>
                <td className={`border border-black px-4 py-[2px] text-center ${
                  material.quantity-data.BUDGET[index].ESTIMATED > 0
                    ? 'text-green-500'
                    : material.quantity-data.BUDGET[index].ESTIMATED < 0
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}>
                  {material.quantity-data.BUDGET[index].ESTIMATED > 0 ? '+' : null}{material.quantity-data.BUDGET[index].ESTIMATED}
                </td>
                <td className="border border-black px-4 py-[2px] text-center">{material.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProgressSummary
