import ChosenFileItemProps from "./ChosenFileItem";

interface ChosenFileListProps {
    uploadedFiles: File[];
    onFileDelete: (index: number) => void;
    isFileUpload: boolean
}

export default function ChosenFileList({ uploadedFiles, onFileDelete, isFileUpload }: ChosenFileListProps) {
    if (uploadedFiles.length === 0 || isFileUpload) return null;


    return (
        <ul className="uploaded-list">
            {
                uploadedFiles.map((file, index) => {
                    return <ChosenFileItemProps key={`${file.name}-${file.size}-${file.lastModified}-${index}`} file={file} index={index} onFileDelete={onFileDelete} />
                })
            }
        </ul>
    );
}
