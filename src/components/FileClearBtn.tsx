type FileClearBtnProps = {
    onClick: () => void;
}

export default function FileClearBtn({ onClick }: FileClearBtnProps) {
    return (
        <button onClick={onClick} className="btn btn-outline">Clear</button>
    );
}