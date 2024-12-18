import { useStoreActions } from 'easy-peasy';

const PdfFileHandler = () => {
    const setPdfData = useStoreActions((actions) => actions.media.setPdfData);

    const handlePdfFileChange = (e) => {
        setPdfData(e.target.files[0])
    };

    return <div className="my-5">
        <div className="card br-20 app-layout">
            <div className="card-body">
                <div className="form-group">
                    <p className='card-title'>Upload PDF</p>
                    <input type="file" name="" accept=",.pdf" id="pdfFile" className="form-control" onChange={handlePdfFileChange} />
                </div>
            </div>
        </div>
    </div>;
}

export default PdfFileHandler;
