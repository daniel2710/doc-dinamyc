import { GenerateReport } from "../utils/interface";

interface Props{
  data: GenerateReport;
}

const Notes = ({ data }: Props) => {

  return (
    <section className="mt-10">
      <div className="bg-[#DCEAF7]">
        <p className="font-bold text-lg text-center">NOTES</p>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#FBE3D6] uppercase">
              <th className="border border-black px-4 py-[2px] text-left">#</th>
              <th className="border border-black px-4 py-[2px] text-left">category</th>
              <th className="border border-black px-4 py-[2px] text-center">comments</th>
              <th className="border border-black px-4 py-[2px] text-center">ATTACHMENTS</th>
            </tr>
          </thead>
          <tbody>
            {data.NOTES.map((notes, index) => (
              <tr key={index} className="hover:bg-gray-100 font-medium">
                <td className="border border-black px-4 py-[2px]">{index + 1}</td>
                <td className="border border-black px-4 py-[2px]">{notes.category}</td>
                <td className="text-center border border-black px-4 py-[2px]">{notes.note}</td>
                <td className="text-center border border-black px-4 py-[2px]">{notes.ATTACHMENTS[index] ? notes.ATTACHMENTS[index].src : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Notes
