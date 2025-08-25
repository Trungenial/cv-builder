import { FiEdit2 } from "react-icons/fi";
import "../../styles/utils/EditButton.css";

export default function EditButton({ clickEdit }) {
    return (
        <button className="button button-edit" onClick={clickEdit}>
            <FiEdit2 style={{ fontSize: "1.1rem" }} />
            Edit
        </button>
    );
}
