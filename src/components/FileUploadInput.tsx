
interface FileUploadInputProps {
    onFileUpload: (fileList: FileList) => void;
}

export default function FileUploadInput({ onFileUpload }: FileUploadInputProps) {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (!files || files.length === 0) return;
        onFileUpload(files);
    }

    return (
        <input type="file" multiple onChange={handleFileChange} />
    )
}
