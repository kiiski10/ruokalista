import Image from 'next/image'

export default function Footer() {
    return(
        <div className="{styles.footer}">
            <a href="">
                <Image src="/img/logo.svg" alt="Logo" width={72} height={16} />
            </a>
        </div>
    )
}
