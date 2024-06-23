import {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";

type Props = {
    href: string
}

const useExactRoute = ({href}: Props) => {
    const pathName = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const pathNameToken = pathName.split('#')[0].split('?')[0]
        setIsActive(pathNameToken === href);
    }, [pathName, href]);

    return isActive;
};

export default useExactRoute;
