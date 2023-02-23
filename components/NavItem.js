import Link from "next/link";

const NavItem = ({ text, href, actice }) => {
    return (
        <Link href={href}>
            <a className={`nav__item ${active ? 'active' : ''}`}>
                {text}
            </a>
        </Link>
    );
};