import { useRouter } from "next/router";
import styles from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const { query: { id } } = useRouter();
    console.log(useRouter());
    return (
        <MainContainer keywords={user.name + '_id_' + user.id}>
            <div className={styles.user}>
                <h1>Пользователь c id {id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}, // will be passed to the page component as props
    }
}