import { useState } from "react";
import "../styles/General.css";
import { IoPersonOutline } from "react-icons/io5";
import EditButton from "./utils/EditButton";
import SaveButton from "./utils/SaveButton";

export default function General() {
    const [isEdit, setIsEdit] = useState(false);
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const clickEdit = () => {
        !isEdit ? setIsEdit(true) : setIsEdit(false);
    };

    const changeGeneralInfo = (e) => {
        const { name, value } = e.target;

        setGeneralInfo({ ...generalInfo, [name]: value });
    };

    return (
        <div className="general">
            <div className="head">
                <IoPersonOutline
                    style={{
                        fontSize: "1.5rem",
                        color: "blue",
                        flexShrink: 0,
                    }}
                />
                <h2>General information</h2>
                {!isEdit ? (
                    <EditButton clickEdit={clickEdit} />
                ) : (
                    <SaveButton clickEdit={clickEdit} />
                )}
            </div>
            <div className="body">
                {!isEdit ? (
                    <>
                        <p>
                            <strong>Name:</strong> {generalInfo.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {generalInfo.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {generalInfo.phone}
                        </p>
                    </>
                ) : (
                    <form action="" autoComplete="off">
                        <div>
                            <label htmlFor="name">
                                <strong>Name:&nbsp;</strong>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={changeGeneralInfo}
                                value={generalInfo.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">
                                <strong>Email:&nbsp;</strong>
                            </label>
                            <input
                                type="mail"
                                id="email"
                                name="email"
                                onChange={changeGeneralInfo}
                                value={generalInfo.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">
                                <strong>Phone:&nbsp;</strong>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                onChange={changeGeneralInfo}
                                value={generalInfo.phone}
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
