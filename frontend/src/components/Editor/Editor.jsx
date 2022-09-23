import React from 'react'
import PdfViewer from '../PdfViewer/PdfViewer'

function Editor() {
  return (
    <div className="PDF-viewer">
			<PdfViewer
				document={"document.pdf"}
			/>
		</div>
  )
}

export default Editor