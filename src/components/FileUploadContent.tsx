import { useState } from "react";
import FileUploadBtn from "./FileUploadBtn";
import FileUploadInput from "./FileUploadInput";
import ChosenFileList from "./ChosenFileList";
import FileClearBtn from "./FileClearBtn";
import FileUploadingList from "./FileUploadingList";

export default function FileUploadContent() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isStartUpload, setUploading] = useState(false);

    const handleFileUpload = (fileList: FileList) => {
        if (fileList.length === 0) return;
        setUploadedFiles(Array.from(fileList));
    }

    const handleUploadBtn = () => {
        setUploading(true);
    }

    const handleFilesClear = () => {
        setUploadedFiles([]);
        setUploading(false);
    }

    const handleFileDelete = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="fileupload-content">
            <div className="upload-container">
                <div className="upload">
                    <FileUploadInput onFileUpload={handleFileUpload} />
                    <FileClearBtn onClick={handleFilesClear} />
                    <FileUploadBtn onClick={handleUploadBtn} filesLength={uploadedFiles.length} />
                </div>
                <ChosenFileList uploadedFiles={uploadedFiles} isFileUpload={isStartUpload} onFileDelete={handleFileDelete} />
            </div>
            <FileUploadingList isStartUpload={isStartUpload} uploadedFiles={uploadedFiles} />
        </div>
    );
}
