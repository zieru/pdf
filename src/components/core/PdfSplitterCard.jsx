import { useStoreActions, useStoreState } from 'easy-peasy';

const PdfSplitterCard = () => {
    const pdfFilePath = useStoreState((state) => state.media.pdfFilePath);

    return <div className='py-0 py-md-4'>
        {pdfFilePath != null ? <div className="row my-0 my-md-5">
            <div className="col-md-6">
                <iframe
                    src={pdfFilePath}
                    style={{ width: "100%", height: '500px' }}
                ></iframe>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
                <div className="app-layout">
                    <div className="card br-20">
                        <div className="card-body">
                            <PdfRangeForm />
                        </div>
                    </div>
                </div>
            </div>
        </div > : <div></div>}
    </div>
}

const PdfRangeForm = () => {
    const extractedPdfs = useStoreState((state) => state.media.extractedPdfs);
    const [addExtractedPdfs, handleExtractedPdfs] = useStoreActions((actions) => [
        actions.media.addExtractedPdfs,
        actions.media.handleExtractedPdfs,
    ]);

    return <>
        {extractedPdfs.map(item => <PdfRangeFormItem formItem={item} key={item.id} />)}
        <button
            type="button"
            className="btn px-0"
            onClick={addExtractedPdfs}
        >
            <p className="mb-0 text-start text-play text-danger">
                + Add
            </p>
        </button>
        <div className="d-flex justify-content-end my-4">
            <button
                type="button"
                className="btn btn-dark"
                onClick={handleExtractedPdfs}
            >
                Extract PDFs
            </button>
        </div>
    </>
}

const PdfRangeFormItem = ({ formItem }) => {

    const handleExtractedPdfItemField = useStoreActions((actions) => actions.media.handleExtractedPdfItemField);

    return <div className="d-flex mb-4">
        <div className="form-group me-2 col-6">
            <label className="fw-bold">File Name</label>
            <input
                type="text"
                className="form-control mb-0"
                placeholder="Nama File PDF"
                name='title'
                value={formItem.title}
                onChange={(event) => handleExtractedPdfItemField({
                    event,
                    id: formItem.id,
                })}
            />
        </div>
        <div className="d-flex">
            <div className="form-group me-2">
                <label className="fw-bold">Page Start:</label>
                <input
                    type="number"
                    className="form-control mb-0"
                    placeholder=""
                    name='start'
                    value={formItem.start}
                    onChange={(event) => handleExtractedPdfItemField({
                        event,
                        id: formItem.id,
                    })}
                />
            </div>
            <div className="form-group me-2">
                <label className="fw-bold">Page End</label>
                <input
                    type="number"
                    className="form-control mb-0"
                    placeholder="masukkan halaman terakhirnya"
                    name='end'
                    value={formItem.end}
                    onChange={(event) => handleExtractedPdfItemField({
                        event,
                        id: formItem.id,
                    })}
                />
            </div>
        </div>
    </div>;
}

export default PdfSplitterCard; 
