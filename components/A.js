import Link from "next/link";

export default function ({text, href}) {
    return (
    <Link legacyBehavior href={href}>
        <a>{text}</a>
    </Link>
    )
}