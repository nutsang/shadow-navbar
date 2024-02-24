import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const NavigationGuest = () => {

    return (
        <nav className="navbar bg-[#33007B] flex flex-row justify-between min-w-[240px] sm:py-5 lg:px-10 lg:justify-evenly">
            <div className="navbar-start">
                <Link to={"/"} className="flex flex-row items-center justify-center flex-nowrap">
                    <Icon icon={"game-icons:minerals"} className="size-fit text-[#F000B8] text-2xl sm:text-4xl" />
                    <span translate="no" className="subpixel-antialiased not-italic size-fit font-normal text-[#FFFFFF] text-lg sm:text-2xl">SHADOW</span>
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <details className="dropdown dropdown-end">
                    <summary className="btn border-none flex flex-nowrap items-center align-middle text-[#FFFFFF] bg-[#FFB302] hover:bg-[#E5A101] p-2 mx-2">
                        <Icon icon="ant-design:product-filled" className="mr-1 text-2xl"/>
                        <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-left text-nowrap">หมวดหมู่สินค้า</span>
                        <Icon icon="gridicons:dropdown" className="text-2xl"/>
                    </summary>
                    <menu className="dropdown-content menu z-[1] mt-5 w-full">
                        <Link to="/general-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="ep:goods-filled" className="mr-1 text-2xl"/>
                            <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-nowrap">สินค้าทั้งหมด</span>
                        </Link>
                        <Link to="/sale-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="mdi:discount" className="mr-1 text-2xl"/>
                            <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-nowrap">สินค้าโปรโมชัน</span>
                        </Link>
                        <Link to="/auction-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="mingcute:auction-fill" className="mr-1 text-2xl"/>
                            <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-nowrap">สินค้าประมูล</span>
                        </Link>
                        <Link to="/gacha-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="game-icons:perspective-dice-six-faces-random" className="mr-1 text-2xl"/>
                            <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-nowrap">สินค้าสุ่มกาชา</span>
                        </Link>
                    </menu>
                </details>
                <Link to="/top-up" className="btn border-none flex flex-nowrap items-center align-middle text-[#FFFFFF] bg-[#FFB302] hover:bg-[#E5A101] p-2 mx-2">
                    <Icon icon="ph:plus-fill" className="mr-1 text-2xl"/>
                    <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-left text-nowrap">เติมไอเซล</span>
                </Link>
                <Link to="/sign-in" className="btn border-none flex flex-nowrap items-center align-middle text-[#FFFFFF] bg-[#FFB302] hover:bg-[#E5A101] p-2 mx-2">
                    <Icon icon="mdi:login" className="mr-1 text-2xl"/>
                    <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-left text-nowrap">เข้าสู่ระบบ</span>
                </Link>
                <Link to="/sign-up" className="btn border-none flex flex-nowrap items-center align-middle text-[#FFFFFF] bg-[#FFB302] hover:bg-[#E5A101] p-2 mx-2">
                    <Icon icon="mdi:register" className="mr-1 text-2xl"/>
                    <span translate="no" className="text-xl subpixel-antialiased not-italic font-normal text-left text-nowrap">สมัครสมาชิก</span>
                </Link>
            </div>
            <div className="navbar-center">
                <details className="flex items-center justify-center dropdown dropdown-end lg:hidden">
                    <summary className="btn btn-link">
                        <Icon icon={"icon-park-outline:hamburger-button"} className="size-fit text-lg text-[#FFFFFF] sm:text-4xl" />
                    </summary>
                    <menu className="dropdown-content menu z-[1] mt-2 sm:mt-5">
                        <details className="dropdown dropdown-left">
                            <summary className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                                <Icon icon="ant-design:product-filled" className="mr-1"/>
                                <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">หมวดหมู่สินค้า</span>
                            </summary>
                            <menu className="dropdown-content menu z-[1]">
                                <Link to="/general-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                                    <Icon icon="ep:goods-filled" className="mr-1"/>
                                    <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">สินค้าทั้งหมด</span>
                                </Link>
                                <Link to="/sale-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                                    <Icon icon="mdi:discount" className="mr-1"/>
                                    <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">สินค้าโปรโมชัน</span>
                                </Link>
                                <Link to="/auction-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                                    <Icon icon="mingcute:auction-fill" className="mr-1"/>
                                    <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">สินค้าประมูล</span>
                                </Link>
                                <Link to="/gacha-product" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                                    <Icon icon="game-icons:perspective-dice-six-faces-random" className="mr-1"/>
                                    <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">สินค้าสุ่มกาชา</span>
                                </Link>
                            </menu>
                        </details>
                        <Link to="/top-up" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="ph:plus-fill" className="mr-1"/>
                            <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">เติมไอเซล</span>
                        </Link>
                        <Link to="/sign-in" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="mdi:login" className="mr-1"/>
                            <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">เข้าสู่ระบบ</span>
                        </Link>
                        <Link to="/sign-up" className="bg-[#3FC3EE] text-[#33007B] hover:text-[#3FC3EE] hover:bg-[#33007B] flex flex-nowrap items-center align-middle p-2">
                            <Icon icon="mdi:register" className="mr-1"/>
                            <span translate="no" className="text-xs subpixel-antialiased not-italic font-normal text-left text-nowrap sm:text-xl">สมัครสมาชิก</span>
                        </Link>
                    </menu>
                </details>
            </div>
        </nav>
    )
}

export default NavigationGuest