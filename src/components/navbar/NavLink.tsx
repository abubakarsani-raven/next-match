import React from 'react'
import {NavbarItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import useExactRoute from "@/hooks/useExactRoute";

type NavLinkProp = {
    href: string,
    label: string,
};
const NavLink = ({href, label}: NavLinkProp) => {
    const exactRoute = useExactRoute({href});

    return (
        <NavbarItem isActive={exactRoute} as={Link} href={href}>{label}</NavbarItem>
    )
}
export default NavLink
