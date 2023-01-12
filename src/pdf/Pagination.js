import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

const btnLabelStyle = {
    display: 'inline-block',
    minWidth: '100px',
    textAlign: 'center',
    backgroundColor: '#fff',
    lineHeight: '24px',
    // padding: '12px 16px',
    verticalAlign: 'middle',
    margin: '0 8px',
    color: '0A083A',
    borderRadius: '8px',
    fontWeight: '600'
}

function calculatePage(page, dir, numPages) {
    const newPage = page + dir
    return newPage < 1 || newPage > numPages ? page : newPage
}

function Pagination({page, setPage, numPages}) {
    const { t } = useTranslation();
    
    if (numPages <= 1) return null
    return (
        <div>
            <button
                className={classNames('pages-btn p-1 sm:p-3', {
                    disabled: page === 1
                })}
                aria-label="Previous"
                onClick={() => setPage(page => calculatePage(page, -1, numPages))}
            >
                <FontAwesomeIcon icon={faChevronLeft} fixedWidth/>
            </button>
            <span style={btnLabelStyle} className={'py-1 px-3 sm:py-3 px-6'}>
        {t('pagination.page')} {page}/{numPages}
      </span>
            <button
                className={classNames('pages-btn p-1 sm:p-3', {
                    disabled: page === numPages
                })}
                aria-label="Next"
                onClick={() => setPage(page => calculatePage(page, 1, numPages))}
            >
                <FontAwesomeIcon icon={faChevronRight} fixedWidth/>
            </button>
        </div>
    )
}

export default Pagination
