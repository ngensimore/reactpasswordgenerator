
export default function PasswordCards(props) {

    const passwordList = props.passwordList.map((password, index) =>
        <li key={index}>{password}</li>
    )

    return <ul>{passwordList}</ul>

}