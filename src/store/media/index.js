import { action, thunk } from 'easy-peasy';
import shortid from "shortid";
import { PDFDocument } from "pdf-lib";
import { notify } from '../../services/helper/utils';

const mediaModel = {
    pdfFile: null,
    setPdfFile: action((state, file) => state.pdfFile = file),

    pdfFilePath: null,
    setPdfFilePath: action((state, file) => state.pdfFilePath = URL.createObjectURL(file)),

    uint8Array: null,
    setUnit8Array: action((state, data) => state.uint8Array = data),

    setPdfData: thunk(async (actions, file) => {
        actions.setPdfFile(file);
        actions.setPdfFilePath(file);
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = event.target.result;
            const uint8Array = new Uint8Array(fileData);
            actions.setUnit8Array(uint8Array);
        };
        reader.readAsArrayBuffer(file);

        const mainPdfDoc = await PDFDocument.load(uint8Array);
        console.log(mainPdfDoc.getPages())
        
        notify({
            message: 'PDF uploaded',
            status: true
        });
    }),

    extractedPdfs: [
        {
            id: shortid.generate(),
            title: '',
            start: '',
            end: ''
        }
    ],
    addExtractedPdfs: action((state) => {
        state.extractedPdfs.push({
            id: shortid.generate(),
            title: '',
            start: '',
            end: ''
        });
    }),

    handleExtractedPdfItemField: action((state, { event, id }) => {
        const pdfs = state.extractedPdfs.filter(item => item.id == id);
        if (pdfs.length > 0) {
            pdfs[0][event.target.name] = event.target.value
        }
    }),

    handleExtractedPdfs: thunk(async (actions, __, { getState }) => {
        try {
            const pdfs = getState()['extractedPdfs'];
            pdfs.forEach(async (pdf) => await actions.splitPdf(pdf));
            notify({
                message: 'PDF Extracted Successfully',
                status: true
            });
        } catch (error) {
            notify({
                message: 'Something went wrong',
                status: false
            });
        }
    }),

    splitPdf: thunk(async (actions, payload, { getState }) => {
        const uint8Array = getState()['uint8Array'];
        const mainPdfDoc = await PDFDocument.load(uint8Array);
        const pdfDoc = await PDFDocument.create();
        let range = [];
        const { start, end, title } = payload;
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        const pages = await pdfDoc.copyPages(mainPdfDoc, range);
        pages.forEach((page) => {
            pdfDoc.addPage(page);
        });
        const pdfBytes = await pdfDoc.save();
        actions.downloadFromBytes({
            bytes: pdfBytes,
            filename: `${title}.pdf`,
        });
    }),

    downloadFromBytes: action((_, { bytes, filename }) => {
        let blob = new Blob([bytes], { type: "application/pdf" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    })
};

export default mediaModel;
