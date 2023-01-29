import { useRouter } from "next/router";
import styles from '../../styles/User.module.scss'

export default function User() {
    const { query: { id } } = useRouter();
    console.log(useRouter());
    return (
        <div className={styles.user}>
            <h1>Пользователь c id {id}</h1>
        </div>
    )
}