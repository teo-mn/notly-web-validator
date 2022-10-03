import React, {useEffect, useRef, useState} from 'react'

import Pagination from './Pagination'
import PDFZoom from './PDFZoom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const pdfContainerStyle = {
  height: '100%',
  position: 'relative',
  backgroundColor:'#F9F9FE'
}
const toolbarStyle = {
  padding: '0.5rem 1rem',
  position: 'absolute',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-end',
}
const canvasContainerStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
  padding: '0.5rem',
  paddingTop: '40px',
  height: '90%',
  overflow: 'auto',
  borderLeft: '3px solid #F9F9FE',
  boxSizing: 'border-box',
}
const canvasStyle = {
  margin: 'auto',
  borderRadius: '16px',
}

const CloseButton = ({closeFunction}) =>
    closeFunction ? (
        <button
            className="bc-btn"
            onClick={closeFunction}
        >
          <FontAwesomeIcon icon={faTimes} fixedWidth/>
        </button>
    ) : null

function renderPDFPage(pdf, page, scale, canvasRef) {
  pdf.getPage(page).then(pdfPage => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const scaledViewport = pdfPage.getViewport({scale})

    canvas.width = scaledViewport.width
    canvas.height = scaledViewport.height

    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport
    }

    pdfPage.render(renderContext)
  })
}

export default function PDFViewer({pdf, closeFunction}) {
  const [page, setPage] = useState(1)
  const [scale, setScale] = useState(1)

  const firstRender = useRef(true)
  const canvasRef = useRef(null)
  const canvasContainerRef = useRef(null)

  useEffect(() => {
    function calculateInitialScale() {
      pdf.getPage(page).then(pdfPage => {
        const viewport = pdfPage.getViewport({scale: 1})
        const canvasContainer = canvasContainerRef.current
        const canvasContainerPadding = parseFloat(
            window
                .getComputedStyle(canvasContainer, null)
                .getPropertyValue('padding-left')
                .replace('px', '')
        )
        const canvasContainerWidth =
            canvasContainer.offsetWidth - canvasContainerPadding * 2 - 80
        const canvasContainerHeight =
            canvasContainer.offsetHeight - canvasContainerPadding * 2 - 80
        let newScale = canvasContainerWidth / viewport.width
        if (viewport.height * newScale > canvasContainerHeight) {
          newScale = canvasContainerHeight / viewport.height
        }

        setScale(newScale)
      })
    }

    if (firstRender.current) {
      firstRender.current = false
      calculateInitialScale()
    } else {
      renderPDFPage(pdf, page, scale, canvasRef)
    }
  }, [pdf, page, scale, canvasRef])

  return (
      <div style={pdfContainerStyle}>
        <div style={toolbarStyle}>
          <div className="bc-inline-block">
            <CloseButton closeFunction={closeFunction}/>
          </div>
        </div>
        <div style={canvasContainerStyle} ref={canvasContainerRef}>
          <canvas className={'drop-shadow'} style={canvasStyle} ref={canvasRef}/>
        </div>
        <div className={'sm:grid sm:grid-cols-2 md:grid-cols-3 my-3'}>
          <PDFZoom scale={scale} setScale={setScale}/>
          <div className="inline-block sm:flex sm:justify-end md:justify-center mx-6 md:mx-0">
            <Pagination page={page} numPages={pdf.numPages} setPage={setPage}/>
          </div>
        </div>
      </div>
  )
}
