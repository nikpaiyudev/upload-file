import { useEffect, useRef, useState } from "react";
import { uploadFileToSupabase } from "../api/uploadFile";

type FileUploadingItemProps = {
    file: File;
}

// https://www.untitledui.com/react/components/file-uploaders

export function FileUploadingItem({ file }: FileUploadingItemProps) {
    const isPdf = file.type === "application/pdf";
    const fileSize = formatBytes(file.size);
    const [progress, setProgress] = useState(0);
    const innerRef = useRef<HTMLDivElement>(null);

    const uploadFile = async () => {
        
        const res = await uploadFileToSupabase(file, 'files', 'nikhil');
    }

    useEffect(() => {
        // Upload the file to system

        uploadFile();
    }, []);


    return (
        <li className="flex gap-3 border p-5 w-full">
            <div className="flex ">
                <span>{isPdf ? "PDF" : "FILE"}</span>
            </div>
            <div className="flex flex-col w-full">
                <span>{file.name}</span>
                <div className="flex gap-2 w-full justify-between items-center">
                    <span>{fileSize}</span>
                    <span>{progress}%</span>
                </div>
                <div className="progressbar mt-2">
                    <div className="inner" ref={innerRef}></div>
                </div>
            </div>
        </li>
    )
}

function formatBytes(bytes: number) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / Math.pow(1024, unitIndex);
    const rounded = value >= 10 || unitIndex === 0 ? Math.round(value) : Math.round(value * 10) / 10;
    return `${rounded} ${units[unitIndex]}`;
}
