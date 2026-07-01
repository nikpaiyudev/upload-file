
type ChosenFileItemProps = {
    file: File;
    index: number;
    onFileDelete: (index: number) => void;
}

export default function ChosenFileItem({ file, index, onFileDelete }: ChosenFileItemProps) {
    const { name } = file;

    const handleFileDelete = () => {
        onFileDelete(index);
    }

    return (
        <li className="fileItem">
            <span>{name}</span>
            <button type="button" className="btn btn-outline" onClick={handleFileDelete}>X</button>
        </li>
    );
}
