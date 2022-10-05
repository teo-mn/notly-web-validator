import React from 'react';
// import {useHistory} from "react-router";

const PartnersForm = () => {
  // const history = useHistory();
  // const list = () => {
  //   history.push('/partnersList');
  // }
  return (
      <div className={'bg-[#FDFDFF]'}>
        <iframe id={'partnersForm'} className={'h-full w-screen'} src="https://forms.office.com/r/q6g1fR6VKn" title={'Бүртгүүлэх'}/>
      </div>
  )

}

export default PartnersForm;
