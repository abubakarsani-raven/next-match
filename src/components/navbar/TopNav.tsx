'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import BrandLogo from "@/components/navbar/BrandLogo";
import {Link} from "@nextui-org/link";
import {Button, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {LockFilledIcon, MailIcon} from "@nextui-org/shared-icons";
import {Input} from "@nextui-org/input";
import NavLink from "@/components/navbar/NavLink";

const TopNav = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [modalPlacement, setModalPlacement] = React.useState("auto");
    return (
        <>
            <Navbar shouldHideOnScroll className='bg-white' classNames={{
                item: [
                    'text-sm',
                    'text-black',
                    'capitalize',
                    'data-[active="true"]:text-yellow-700'
                ],
            }}>
                <NavbarBrand className='uppercase font-semibold text-black' as={Link} href={'/'}>
                    <BrandLogo/> Random
                </NavbarBrand>
                <NavbarContent justify='center'>
                    <NavLink href={'/members'} label={`Members`} />
                    <NavLink href={'/lists'} label={`Lists`} />
                    <NavLink href={'/message'} label={`Messages`} />
                </NavbarContent>
                <NavbarContent justify='end'>
                    <Button as={Link} href={`/login`} variant='bordered' className='text-black'>Login</Button>
                    <Button as={Link} href={`/register`} variant='bordered' className='text-black'>Register</Button>
                </NavbarContent>
            </Navbar>
            <Modal isOpen={isOpen}
                   placement='auto'
                   isDismissable={false}
                   backdrop='blur'
                   onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockFilledIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default TopNav
