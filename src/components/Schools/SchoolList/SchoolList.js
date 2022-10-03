import React from 'react';

import numlogo from "../../../assets/images/school-logos/logo_num.png";
import mustlogo from "../../../assets/images/school-logos/logo_must.png";
import ufelogo from "../../../assets/images/school-logos/logo-ufe.png";
import PMIlogo from "../../../assets/images/school-logos/logo_PMI.png";
import MStarslogo from "../../../assets/images/school-logos/logo_MstarsHub.png";
import SchoolCard from "../SchoolCard/SchoolCard";

const SchoolList: React.FC  = (props) => {

    const data = [
        {
            img: numlogo,
            title: 'Монгол Улсын Их Сургууль',
            founded: 'Байгуулагдсан огноо: 1942 он',
            text: 'Нэгдсэн огноо: 2022.05'
        },
        {
            img: ufelogo,
            title: 'Санхүү Эдийн Засгийн Их Сургууль',
            founded: 'Байгуулагдсан огноо: 1924 он',
            text: 'Нэгдсэн огноо: 2022.02'
        },
        {
            img: mustlogo,
            title: 'Шинжлэх Ухаан Технологийн Их Сургууль',
            founded: 'Байгуулагдсан огноо: 1959 он',
            text: 'Нэгдсэн огноо: 2022.06'
        },
        {
            img: PMIlogo,
            title: 'PMI Mongolia Chapter',
            founded: 'Байгуулагдсан огноо: 2013 он',
            text: 'Нэгдсэн огноо: 2022.08'
        },
        {
            img: MStarslogo,
            title: 'MStars Hub',
            founded: 'Байгуулагдсан огноо: 2021 он',
            text: 'Нэгдсэн огноо: 2022.08'
        }
    ];

  return (
      <div className={"xl:container mx-auto my-16 min-h-with-footer"} id={'school-list-wrapper'}>
          <h1 className={'text-2xl px-10 pt-10 pb-14 font-medium text-primary-black text-center'}>Ашиглаж буй байгууллагуудын жагсаалт</h1>
          <div className={'grid grid-cols-1 gap-6 px-10 lg:grid-cols-4 md:grid-cols-2'}>
              {data.map((props, idx) =>
                  <SchoolCard key={idx} {...props}/>
              )}
          </div>
      </div>
  )
}

export default SchoolList;
