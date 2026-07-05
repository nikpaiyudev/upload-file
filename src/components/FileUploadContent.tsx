import { useState } from "react";
import FileUploadBtn from "./FileUploadBtn";
import FileUploadInput from "./FileUploadInput";
import FileUploadingList from "./FileUploadingList";

export default function FileUploadContent() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isStartUpload, setUploading] = useState(false);

    const handleFileUpload = (fileList: FileList) => {
        setUploadedFiles(Array.from(fileList));
    }

    const handleUploadBtn = () => {
        setUploading(true);
    }

    console.log(uploadedFiles, 'uploadedFiles');

    return (
        <div className="fileupload-content">
            <div className="upload-container">
                <div className="upload">
                    <FileUploadInput onFileUpload={handleFileUpload} />
                    <FileUploadBtn onClick={handleUploadBtn} filesLength={uploadedFiles.length} />
                </div>

            </div>
            <FileUploadingList isStartUpload={isStartUpload} uploadedFiles={uploadedFiles} />
        </div>
    );
}
