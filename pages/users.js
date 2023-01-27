import Link from "next/link";
import { useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'petya'},
        {id: 2, name: 'vasya'}
    ])
    return (
        <div>
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
        </div>
    );
};

export default Users;