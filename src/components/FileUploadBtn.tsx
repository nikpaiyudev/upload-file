type FileUploadBtnProps = {
    onClick: () => void;
    filesLength: number;
}

export default function FileUploadBtn({ onClick, filesLength }: FileUploadBtnProps) {
    const isDisabled = filesLength === 0;
    const filesText = filesLength > 1 ? 'files' : 'file';
    const handleUploadClick = () => {
        onClick();
    }

    return <button onClick={handleUploadClick} disabled={isDisabled} className={`btn ${isDisabled ? 'btn-disabled' : ''}`}>Upload {filesLength} {filesText}</button>
}