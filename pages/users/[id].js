import { useRouter } from "next/router";

export default function () {
    const { query: { id } } = useRouter();
    console.log(useRouter());
    return (
        <div>
            <h1>Пользователь c id {id}</h1>
        </div>
    )
}