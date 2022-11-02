import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {formatDate} from './Datetime'

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
    return (
        <div className={''} style={{marginBottom: '1.5rem'}}>
            {isRevoked && <div className="bc-info-wrapper bg-white drop-shadow-yellow rounded-2xl p-6">
                <h3>Хүчингүй болгосон мэдээлэл</h3>
                <div className="bc-info-item mt-4">
                    <label>Хүчингүй болгосон огноо</label>
                    <div>{formatDate(revokedAt * 1000)}</div>
                </div>
            </div>}
            <div className="bc-info-wrapper bg-white drop-shadow-yellow rounded-2xl p-6">
                <h3>Баталгаажуулсан мэдээлэл</h3>
                <div className="bc-info-item mt-4">
                    <label>Баталгаажуулагч</label>
                    <div>{issuer}</div>
                </div>
                <div className="bc-info-item mt-2">
                    <label>Блокчэйн нэр</label>
                    <div>{capitalize(chain)}</div>
                </div>
                <div className="bc-info-item mt-2">
                    <label>Баталгаажуулагч ID</label>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a title={address} href={createLink(address, 'address', chain, testnet)} target="_blank"
                       rel="noopener noreferrer">{truncateAddress(address, 12)}</a>
                </div>
                <div className="bc-info-item mt-2">
                    <label>Гүйлгээний ID</label>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a title={txid} href={createLink(txid, 'transactions', chain, testnet)} target="_blank"
                       rel="noopener noreferrer">{truncateAddress(txid, 12)}</a>
                </div>
                <div className="bc-info-item mt-2">
                    <label>Баталгаажсан огноо</label>
                    <div>{formatDate(timestamp * 1000)}</div>
                </div>

                {expireDate !== '0' && <div className="bc-info-item mt-2">
                    <label>{state === 'EXPIRED' ? 'Хугацаа дууссан огноо' : 'Хугацаа дуусах огноо'}</label>
                    <div>{formatDate(expireDate * 1000)}</div>
                </div>}
            </div>
        </div>
    )
};

const DiplomaInfo = ({data}) => {
    const translationMap = {
        'DEGREE_NUMBER': {'text': 'Дипломын дугаар', 'order': 1},
        'PRIMARY_IDENTIFIER_NUMBER': {'text': 'Регистрийн дугаар', 'order': 2},
        'INSTITUTION_ID': {'text': 'Байгууллагын ID', 'order': 3},
        'INSTITUTION_NAME': {'text': 'Байгууллагын нэр', 'order': 4},
        'EDUCATION_LEVEL_NAME': {'text': 'Боловсролын зэрэг', 'order': 5},
        'EDUCATION_FIELD_CODE': {'text': 'Боловсролын салбарын код', 'order': 6},
        'EDUCATION_FIELD_NAME': {'text': 'Боловсролын салбарын нэр', 'order': 7},
        'TOTAL_GPA': {'text': 'Голч', 'order': 8},
        'LAST_NAME': {'text': 'Овог', 'order': 9},
        'FIRST_NAME': {'text': 'Нэр', 'order': 10},
        'CONFER_YEAR_NAME': {'text': 'Хичээлийн жил', 'order': 11}
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
        <h3>Дипломын мэдээлэл</h3>
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

const ErrorMsg = ({customText, docType}) => (
    <div className="drop-shadow-gray border border-gray-50 rounded-md p-5">
        <ul className={'text-left'}>
            <li className={'grid grid-cols-9'}>
                <FontAwesomeIcon icon={faInfoCircle} className="text-primary mt-1"/>
                <div className="col-span-8 mx-1">
                    Та блокчэйн сүлжээнд баталгаажсан PDF файл оруулна уу.
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
    </div>
)

const Result = ({docType, result, error, customText}) => {
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
                            Хүчинтэй
                        </div>
                    )}
                    {result.state === 'EXPIRED' && (
                        <div id="result_revoked_expired" className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'} style={{color: '#DB9390',}}>Хугацаа
                                дууссан
                            </div>
                        </div>
                    )}
                    {result.state === 'REVOKED' && (
                        <div id="result_revoked_expired" className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'} style={{color: '#DB9390',}}>Хүчингүй
                            </div>
                        </div>
                    )}

                    {result.state === 'APPROVE_PENDING' && (
                        <div className="bc-alert bc-alert-danger bc-text-center">
                            <div className={'text-[#DB9390] text-xl font-medium'}
                                 style={{color: '#DB9390',}}>Боловсролын ерөнхий газраас хүлээгдэж байна
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
