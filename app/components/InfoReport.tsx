import { GenerateReport } from "../utils/interface";

interface Props{
  data: GenerateReport;
}

const InfoReport = ({ data }: Props) => {
  return (
    <section className='pt-5 bg-white'>
      <div className='p-2 flex justify-between'>
        <h1 className='uppercase text-black text-2xl font-bold md:text-[2rem]'>Report</h1>
        <div className='flex flex-col'>
          <label className='font-bold text-base flex justify-between gap-3'>From: <span className='font-medium'>{data.DATE_START}</span></label>
          <label className='font-bold text-base flex justify-between gap-3'>To: <span className='font-medium'>{data.DATE_END}</span></label>
        </div>
      </div>
      <div className='px-2 flex flex-col gap-3 md:flex-row md:justify-between md:items-end'>

        <div className='flex flex-col'>
          <label className='font-bold text-base flex gap-3'>Project: <span className='font-medium'>{data.PROJECT_NAME}</span></label>
          <label className='font-bold text-base flex gap-3'>Address: <span className='font-medium'>{data.ADDRESS}</span></label>
          <label className='font-bold text-base flex gap-3'>Leader: <span className='font-medium'>field not found...</span></label>
        </div>

        <div className='flex flex-col'>
          <label
            className='font-bold text-base flex gap-3'
          >
            Site Health: 
            <span className='flex gap-2 items-center'>

              <span className={`h-5 w-5 rounded-full ${data.SITE_HEALTH === 'NOT STARTED' ? 'bg-gray-600' : data.SITE_HEALTH === 'NEED ATTENTION' ? 'bg-red-600' : data.SITE_HEALTH === 'OK' ? 'bg-[#90EE90]' : 'bg-green-600'}`}></span>

              <span className='font-medium'>{data.SITE_HEALTH}</span>

            </span>
          </label>

          <label
            className='font-bold text-base flex gap-3'
          >
            Site Status: 
            <span className='flex gap-2 items-center'>

              <span className={`h-5 w-5 rounded-full ${data.STATE === 'NOT STARTED' ? 'bg-gray-600' : data.STATE === 'IN PROGRESS' ? 'bg-yellow-600' : data.STATE === 'FINISHED' ? 'bg-green-600' : 'bg-red-600'}`}></span>

              <span className='font-medium'>{data.STATE}</span>

            </span>
          </label>

        </div>

      </div>
    </section>
  )
}

export default InfoReport
