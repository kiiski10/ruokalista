import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="{styles.footer}">
            <Link
                href=""
            >
                <Image src="/logo.svg" alt="Logo" width={72} height={16} />
            </Link>
        </footer>
    )
}
