import { useState } from "react";
import "../styles/General.css";
import { IoPersonOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { FiSave } from "react-icons/fi";

export default function General() {
    const [isEdit, setIsEdit] = useState(false);

    const clickEdit = () => {
        !isEdit ? setIsEdit(true) : setIsEdit(false);
    };

    return (
        <div className="general">
            <div className="head">
                <IoPersonOutline style={{ fontSize: "3rem", color: "blue" }} />
                <h2>General information</h2>
                <button
                    className={
                        "button" + (isEdit ? " button-save" : " button-edit")
                    }
                    onClick={clickEdit}
                >
                    {isEdit ? (
                        <FiSave
                            style={{
                                fontSize: "1.3rem",
                                color: "var(--background-color)",
                            }}
                        />
                    ) : (
                        <FiEdit2 style={{ fontSize: "1.1rem" }} />
                    )}
                    {isEdit ? "Save" : "Edit"}
                </button>
            </div>
            <div className="body">
                <p>
                    <strong>Name:</strong> John Doe
                </p>
                <p>
                    <strong>Email:</strong> john.doe@example.com
                </p>
                <p>
                    <strong>Phone:</strong> 123-356-7890
                </p>
            </div>
        </div>
    );
}
