import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer keywords={"users"}>
            <h1>Список пользователей</h1>
                <ul className="userList">
                    {users.map((user, idx) =>
                        <li key={idx}>
                            <Link legacyBehavior href={`/users/${user.id}`} >
                                <a className="userLink">{user.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            <style jsx>
                {`
                  .userList {
                    display: flex;
                    flex-direction: column;
                  }
                  .userLink {
                    text-decoration: none;
                    color: darkred;
                    font-size: 20px;
                    display: inline-block;
                    margin: 0 0 10px;
                  }
                `}
            </style>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {users}, // will be passed to the page component as props
    }
}