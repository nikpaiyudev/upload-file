
import FileUploadContent from "./FileUploadContent";
import FileUploadHeader from "./FileUploadHeader";

export default function FileUpload() {

    return (
        <div className="container">
            <div className="fileupload">
                <FileUploadHeader />
                <FileUploadContent />
            </div>
        </div>
    )
}