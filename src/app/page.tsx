import {Button} from "@nextui-org/react";
import {FaRegArrowAltCircleUp} from "react-icons/fa";
import {Link} from "@nextui-org/link";
import React from "react";

export default function Home() {
    return (
        <div className='text-3xl text-red-300 font-semibold'>
            Hello App!!!
            <Button
                color='primary'
                variant='bordered'
                startContent={<FaRegArrowAltCircleUp/>}
                size='sm'
            >
                Click Me
            </Button>
            <Link href='/members/' >GO Members</Link>
        </div>
    );
}
