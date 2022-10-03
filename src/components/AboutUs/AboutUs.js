import React from 'react';

// export interface SchoolCardProps {
//     img: string;
//     title: string;
//     founded: string;
//     text: string;
// }

let SchoolCardProps{
    img: let string;
    title: let string;
    founded: let string;
    text: let string;
};
const SchoolCard: React.FC<SchoolCardProps> = ({ }) => {
  return (
      <div className={""}>
          <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 ...">04</div>
              <div className="...">05</div>
          </div>
      </div>
  )
}

export default SchoolCard;
