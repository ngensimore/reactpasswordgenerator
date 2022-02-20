import { useState, useRef } from "react"

export default function PasswordGenerator(props) {
    let [password, setPassword] = useState("")

    const generatePassword = () => {
        let length = 8;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomPassword = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            randomPassword += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(randomPassword)
    }

    const onClickGenerate = () => {

        generatePassword();
    }

    const onClickSave = () => {

        props.onClickSave(password);
    }

    return (
        <form >
            <label>
                Password:
                <input type="text" defaultValue={password} readOnly={true} />
            </label>
            <input type="button" value="Generate" onClick={onClickGenerate} />
            <label>
                Save Password:
                <input type="button" value="Save" onClick={onClickSave} />
            </label>
        </form>
    )
}