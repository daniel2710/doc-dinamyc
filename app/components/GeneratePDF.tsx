'use client'
import { FC } from 'react';
import { GenerateReport } from '../utils/interface';
import Header from './Header'
import InfoReport from './InfoReport'
import ProgressSummary from './ProgressSummary';
import AttendanceSummary from './AttendanceSummary';
import Notes from './Notes';
import PhotoReport from './PhotoReport';
import SignOff from './SignOff';

interface Props{
    data: GenerateReport;
}

const GeneratePDF: FC<Props> = ({ data }) => {
  return (
    <div>
      <Header/>
      <InfoReport
        data={data}
      />
      <ProgressSummary
        data={data}
      />
      <AttendanceSummary
        data={data}
      />
      <Notes
        data={data}
      />
      <PhotoReport
        data={data}
      />
      <SignOff
        data={data}
      />
    </div>
  )
}

export default GeneratePDF
