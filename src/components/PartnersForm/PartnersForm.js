import React from 'react';
// import {useHistory} from "react-router";

const PartnersForm = () => {
  // const history = useHistory();
  // const list = () => {
  //   history.push('/partnersList');
  // }
  return (
      <div className={'mt-10 bg-[#FDFDFF]'}>
        <iframe id={'partnersForm'} className={'h-[89.5vh] w-screen'} src="https://forms.office.com/r/q6g1fR6VKn" title={'Бүртгүүлэх'}/>
      </div>
  )

}

export default PartnersForm;
