import { FiSave } from "react-icons/fi";
import "../../styles/utils/SaveButton.css";

export default function EditButton({ clickEdit }) {
    return (
        <button className="button button-save" onClick={clickEdit}>
            <FiSave
                style={{
                    fontSize: "1.3rem",
                    color: "var(--background-color)",
                }}
            />
            Save
        </button>
    );
}
