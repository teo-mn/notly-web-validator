import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearchMinus, faSearchPlus} from '@fortawesome/free-solid-svg-icons'

const MIN_SCALE = 0.25
const MAX_SCALE = 2

function calculateScale(scale, sign) {
  // Round to the nearest (up or down) 0.25 multiple
  const newScale =
      sign > 0
          ? Math.ceil((scale + 0.01) * 4) / 4
          : Math.floor((scale - 0.01) * 4) / 4

  // Keep within the limits
  if (newScale < MIN_SCALE || newScale > MAX_SCALE) return scale

  return newScale
}

export default function PDFZoom({scale, setScale}) {
  return (
      <div className="bc-inline-block mx-6">
        <button
            className={classNames('tools-btn p-1 sm:p-3', {
              disabled: scale === MIN_SCALE
            })}
            style={{marginRight: '5px'}}
            onClick={() => setScale(scale => calculateScale(scale, -1))}
        >
          <FontAwesomeIcon icon={faSearchMinus} fixedWidth/>
        </button>
        <button
            className={classNames('tools-btn p-1 sm:p-3', {
              disabled: scale === MAX_SCALE
            })}
            onClick={() => setScale(scale => calculateScale(scale, 1))}
        >
          <FontAwesomeIcon icon={faSearchPlus} fixedWidth/>
        </button>
      </div>
  )
}
