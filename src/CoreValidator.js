import React, {useEffect, useState} from 'react'
import * as PDFJS from 'pdfjs-dist'
import Loader from './components/Loader'
import Result from './components/Result'
import HelpIcon from './components/HelpIcon'

import PDFViewer from './pdf/PDFViewer'
import validate from './validate/validate'
import { useTranslation } from 'react-i18next';

PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.js`

export default function CoreValidator({
                                        pdfArrayBuffer,
                                        closeFunction,
                                        topDisplay,
                                        bottomDisplay,
                                        blockchainServices,
                                        contactEmail,
                                        contactName,
                                        organization,
                                        docType = 'certificate',
                                      }) {
  const [loading, setLoading] = useState(true)
  const [preError, setPreError] = useState(null)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [pdf, setPdf] = useState(null)
  const {t} = useTranslation();

  useEffect(() => {
    setLoading(true);

    async function parsePDF() {
      const pdfJSDocument = await PDFJS.getDocument(
          pdfArrayBuffer
      ).promise.catch(err => {
        console.error(err);
        throw new Error(t('error.extract.pdf'))
      })

      const pdfJSMetadata = await pdfJSDocument.getMetadata().catch(err => {
        console.error(err);
        throw new Error(t('error.extract.metadata'));
      })

      setPdf(pdfJSDocument)

      validate(pdfArrayBuffer, pdfJSMetadata, blockchainServices)
          .then(res => {
            setLoading(false);
            setResult(res);
          })
          .catch(err => {
            console.error(err.message);
            setLoading(false);
            setError({detail: err.message});
          })
    }

    parsePDF().catch(err => {
      console.error(err.message)
      setLoading(false)
      setPreError({detail: err.message})
    })
  }, [blockchainServices, pdfArrayBuffer])

  return (
      <div className="core-validator" style={{height: '100%', overflowY: 'none'}}>
        <div className="bc-clearfix" style={{height: '100%'}}>
          <div className="bc-column bc-col-left bc-text-center">
            {topDisplay}
            {loading ? (
                <Loader text={t('loader.text')}/>
            ) : (preError ?
                    <div className="bc-alert bc-alert-danger bc-text-center drop-shadow-gray">
                        {preError.detail}
                    </div> :
                    <>
                      {result && result.id && result.testnet && (
                          <div style={{
                            color: '#999',
                            fontWeight: 'bolder',
                            fontSize: '32px',
                            margin: '0 0 10px 0'
                          }}>
                            TESTNET<HelpIcon
                              text={`Зөвхөн тест хийх зорилгоор Корэкс тест сүлжээнд гүйлгээ хийгдсэн байна.`}/>
                          </div>
                      )}
                      <Result
                          docType={docType}
                          result={result}
                          error={error}
                          customText={{contactEmail, contactName, organization}}
                      />
                      {bottomDisplay}
                    </>
            )
            }
          </div>
          <div className="bc-column bc-col-right">
            {pdf && <PDFViewer pdf={pdf} closeFunction={closeFunction}/>}
          </div>
        </div>
      </div>
  )
}
