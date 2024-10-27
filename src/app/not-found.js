import Link from "next/link";
export default function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go back to the homepage</Link>
        </div>
    )
}