import { FileUploadingItem } from "./FileUploadingItem";

type FileUploadedingListProps = {
    uploadedFiles: File[]
    isStartUpload: boolean;
}


export default function FileUploadingList({ uploadedFiles, isStartUpload }: FileUploadedingListProps) {

    if (!isStartUpload) return;

    return (
        <ul className="flex flex-col gap-5">
            {
                uploadedFiles.map((file, index) => {
                    return <FileUploadingItem key={`${file.name}-${index}`} file={file} />
                })
            }
        </ul>
    )
}