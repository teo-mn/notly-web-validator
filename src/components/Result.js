import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {formatDate} from './Datetime'
import {useTranslation} from 'react-i18next'

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

const createLink = (txid, type, chain, testnet) => {
    let url;
    if (!testnet && chain.toLowerCase().includes('corex')) {
        url = `https://explorer.corexchain.io/${type}/${txid}`;
    } else if (testnet && chain.toLowerCase().includes('corex')) {
        url = `https://explorer-testnet.corexchain.io/${type}/${txid}`;
    }
    return url;
}

const truncateAddress = (address, len = 7) => {
    if (!address || !address.length) {
        return '';
    }
    return `${address.substring(0, len)}...${address.substring(address.length - len, address.length)}`;
}

const IdentityObject = ({
                            address,
                            issuer,
                            txid,
                            timestamp,
                            chain,
                            testnet,
                            isRevoked,
                            revokedAt,
                            expireDate,
                            state
                        }) => {

    const {t} = useTranslation();

    return (
        <div className={''} style={{marginBottom: '1.5rem'}}>
            {isRevoked && <div className="bc-info-wrapper bg-white drop-shadow-yellow rounded-2xl p-6">
                <h3>{t('validate.revoked.information')}</h3>
                <div className="bc-info-item mt-4">
                    <label>{t('validate.revoked.date')}</label>
                    <div>{formatDate(revokedAt * 1000)}</div>
                </div>
            </div>}
            <div className="bc-info-wrapper bg-white drop-shadow-yellow rounded-2xl p-6">
                <h3>{t('validate.information')}</h3>
                <div className="bc-info-item mt-4">
                    <label>{t('validate.issuer')}</label>
                    <div>{issuer.toUpperCase()}</div>
                </div>
                <div className="bc-info-item mt-2">
                    <label>{t('validate.blockchain')}</label>
                    <div>{capitalize(chain)}</div>
                </div>
                <div className="bc-info-item mt-2">
                    <label>{t('validate.issuerId')}</label>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a title={address} href={createLink(address, 'address', chain, testnet)} target="_blank"
                       rel="noopener noreferrer">{truncateAddress(address, 12)}</a>
                </div>
                <div className="bc-info-item mt-2">
                    <label>{t('validate.transactionId')}</label>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a title={txid} href={createLink(txid, 'transactions', chain, testnet)} target="_blank"
                       rel="noopener noreferrer">{truncateAddress(txid, 12)}</a>
                </div>
                <div className="bc-info-item mt-2">
                    <label>{t('validate.date')}</label>
                    <div>{formatDate(timestamp * 1000)}</div>
                </div>

                {expireDate !== '0' && <div className="bc-info-item mt-2">
                    <label>{state === 'EXPIRED' ? `${t('validate.expired.date')}` : `${t('validate.expiration.date')}`}</label>
                    <div>{formatDate(expireDate * 1000)}</div>
                </div>}
            </div>
        </div>
    )
};

const DiplomaInfo = ({data}) => {
    const {t} = useTranslation();
    const translationMap = {
        'DEGREE_NUMBER': {'text': t('validate.diploma.number'), 'order': 1},
        'PRIMARY_IDENTIFIER_NUMBER': {'text': t('validate.registration.number'), 'order': 2},
        'INSTITUTION_ID': {'text': t('validate.organization.id'), 'order': 3},
        'INSTITUTION_NAME': {'text': t('validate.organization.name'), 'order': 4},
        'EDUCATION_LEVEL_NAME': {'text': t('validate.education.degree'), 'order': 5},
        'EDUCATION_FIELD_CODE': {'text': t('validate.educational.sector.code'), 'order': 6},
        'EDUCATION_FIELD_NAME': {'text': t('validate.educational.sector.name'), 'order': 7},
        'TOTAL_GPA': {'text': t('validate.gpa'), 'order': 8},
        'LAST_NAME': {'text': t('validate.last.name'), 'order': 9},
        'FIRST_NAME': {'text': t('validate.first.name'), 'order': 10},
        'CONFER_YEAR_NAME': {'text': t('validate.school.year'), 'order': 11}
    }
    const items = Object.entries(data).sort(([key1, value1], [key2, value2]) => {
            const x1 = translationMap[key1];
            const x2 = translationMap[key2];
            if (!x1 && !x2) return 0;
            if (!x1) return -1;
            if (!x2) return 1;
            if (x1.order === x2.order) return 0;
            return x1.order > x2.order ? 1 : -1;
        }
    )

    return <div className="bc-info-wrapper bg-white drop-shadow-yellow rounded-2xl p-6">
        <h3>{t('validate.diploma.information')}</h3>
        {
            items.map(item => <>
                <div className="bc-info-item mt-2">
                    <label>{translationMap[item[0]].text || item[0]}</label>
                    <div>{item[1]}</div>
                </div>
            </>)
        }
    </div>
}

const ErrorMsg = ({customText, docType}) => {
    const { t } = useTranslation();
    return (
    <div className="drop-shadow-gray border border-gray-50 rounded-md p-5">
        <ul className={'text-left'}>
            <li className={'grid grid-cols-9'}>
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary mt-1"/>
                <div className="col-span-8 mx-1">
                    {t('validate.verified.file')}
                </div>

            </li>
            <li className={'grid grid-cols-9'}>
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary mt-1"/>
                <div className="col-span-8 mx-1">Хэрэв блокчэйнд баталгаажуулсан файлыг засварлаж өөрчлөлт оруулсан бол
                    хүчингүйд тооцогдоно.
                </div>
            </li>
        </ul>
        {customText.contactEmail && (
            <>
                <br/>
            </>
        )}
    </div>)
}

const Result = ({docType, result, error, customText}) => {
    const {t} = useTranslation();
    return (
        <div>
            {error && (
                <>
                    <div id="result_invalid" className="bc-alert bc-alert-danger bc-text-center">
                        <div className={'text-[#DB9390] text-xl font-medium'}
                             style={{color: '#DB9390',}}>{error.detail}</div>
                    </div>
                    <div className={'msg'}>
                        <ErrorMsg customText={customText} docType={docType}/>
                    </div>

                </>
            )}
            {result && (
                <>
                    {result.state === 'ISSUED' && (
                        <div id="result_valid" className={classNames('col-span-3 text-center bg-green-600 text-white uppercase font-medium text-xl drop-shadow-yellow state py-9 rounded-2xl')}>
                            {t('validate.issued')}
                        </div>
                    )}
                    {result.state === 'EXPIRED' && (
                        <div id="result_revoked_expired" className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'} style={{color: '#DB9390',}}>{t('validate.expired')}
                            </div>
                        </div>
                    )}
                    {result.state === 'REVOKED' && (
                        <div id="result_revoked_expired" className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'} style={{color: '#DB9390',}}>{t('validate.revoked')}
                            </div>
                        </div>
                    )}

                    {result.state === 'APPROVE_PENDING' && (
                        <div className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'}
                                 style={{color: '#DB9390',}}>{t('validate.approvePending')}
                            </div>
                        </div>
                    )}

                    <IdentityObject
                        address={result.cert.issuer}
                        issuer={result.issuer.name || 'Unknown'}
                        txid={result.cert.txid}
                        timestamp={result.cert.createdAt}
                        chain={result.isTestnet ? 'TEO | COREX ***ТЕСТ СҮЛЖЭЭ***' : 'TEO | COREX'}
                        testnet={result.isTestnet}
                        isRevoked={result.cert.isRevoked}
                        revokedAt={result.cert.revokedAt}
                        expireDate={result.cert.expireDate}
                        state={result.state}
                    />
                    {result.isUniversity && <DiplomaInfo data={result.metadata['univ_meta']}/>}
                </>)}
        </div>
    )
}

export default Result
