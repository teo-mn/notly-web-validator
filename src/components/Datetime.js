import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faClock} from '@fortawesome/free-regular-svg-icons'


const prependZeroes = (n) => {
  if (n <= 9) {
    return '0' + n;
  }
  return n;
}
export const formatDate = (timestamp) => {
  const timeUTC = new Date(timestamp);
  return `${timeUTC.getFullYear()}-${prependZeroes(timeUTC.getMonth() + 1)}-${prependZeroes(timeUTC.getDate())} ${prependZeroes(timeUTC.getHours())}:${prependZeroes(timeUTC.getMinutes())}`
}

const Datetime = ({utc, singleRow = false}) => {
  if (!utc) {
    return '-';
  }
  const timeUTC = new Date(utc);
  const formattedDate = `${timeUTC.getFullYear()}-${prependZeroes(timeUTC.getMonth() + 1)}-${prependZeroes(timeUTC.getDate())}`
  const formattedTime = `${prependZeroes(timeUTC.getHours())}:${prependZeroes(timeUTC.getMinutes())}`

  return (
      <div>
        {singleRow ?
            <><FontAwesomeIcon icon={faCalendarAlt}/> {formattedDate}&nbsp;&nbsp; <FontAwesomeIcon
                icon={faClock}/> {formattedTime}</> :
            <>
              <div><FontAwesomeIcon icon={faCalendarAlt}/> {formattedDate}</div>
              <div><FontAwesomeIcon icon={faClock}/> {formattedTime}</div>
            </>
        }
      </div>
  );
}

export default Datetime;
