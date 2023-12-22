import { useEffect, useState } from "react";

const menu = [
    {
        name: "home",
        link: "",
        children: "",
    },
    {
        name: "profil",
        link: "",
        children: [
            {
                name: "Visi & Misi",
                link: "visi-misi",
            },
            {
                name: "Struktur Pemerintahan",
                link: "struktur-pemerintahan",
            },
        ],
    },
    {
        name: "informasi",
        link: "",
        children: [
            {
                name: "KTP",
                link: "ktp",
            },
        ],
    },
];

export default function Navbar() {
    const [navbar, setNavbar] = useState({
        profil: false,
        informasi: false,
    });
    const [sidebar, setSidebar] = useState({
        burger: false,
        profil: false,
        informasi: false,
    });
    function handleSidebar() {
        sidebar.burger
            ? setSidebar((val) => ({ ...val, burger: false }))
            : setSidebar((val) => ({ ...val, burger: true }));
    }
    return (
        <div className="bg-gray-50 h-screen">
            {/* navbar */}
            <div className="flex justify-between items-center shadow-md h-16 bg-white">
                <div className="ml-4">
                    <div className="flex items-center">
                        <img
                            src="images/logo-bengkalis.png"
                            className="w-8"
                            alt=""
                        />
                        <div className="flex flex-col ml-1">
                            <div className="uppercase text-green-600 text-xl font-bold">
                                Desa Wonosari
                            </div>
                            <div className="-mt-2 text-sm">
                                Kabupaten Bengkalis
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden flex flex-row gap-4">
                    {menu.map((i: any) => (
                        <div className="relative flex h-12">
                            <div
                                onMouseOver={() =>
                                    setNavbar((val) => ({
                                        ...val,
                                        [i.name]: true,
                                    }))
                                }
                                onMouseOut={() =>
                                    setNavbar((val) => ({
                                        ...val,
                                        [i.name]: false,
                                    }))
                                }
                                className="flex items-center"
                            >
                                <div className="capitalize">{i.name}</div>
                                {i.children && (
                                    <svg
                                        height="16"
                                        width="14"
                                        viewBox="0 0 448 512"
                                        className="fill-gray-500"
                                    >
                                        <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                    </svg>
                                )}
                            </div>
                            {i.children &&
                                //@ts-ignore
                                navbar[i.name] && (
                                    <div
                                        onMouseOver={() =>
                                            setNavbar((val) => ({
                                                ...val,
                                                [i.name]: true,
                                            }))
                                        }
                                        onMouseOut={() =>
                                            setNavbar((val) => ({
                                                ...val,
                                                [i.name]: false,
                                            }))
                                        }
                                        className="absolute p-3 top-8 bg-white shadow-md rounded-md"
                                    >
                                        {i.children.map((c: any) => (
                                            <div className="text-nowrap">
                                                {c.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
                <div className="max-md:hidden mr-4">
                    <form action="" className="flex gap-2">
                        <input
                            type="text"
                            className="w-64 rounded-md bg-green-200 border-none"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 rounded-md px-4 py-2 text-white"
                        >
                            Cari
                        </button>
                    </form>
                </div>
                <div className="mr-4 lg:hidden">
                    <svg
                        onClick={handleSidebar}
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                        className={`${sidebar.burger ? "rotate-90" : ""}
                                transition-transform duration-500
                        `}
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
            </div>
            {/* navbar mobile */}
            <div className="lg:hidden">
                <div
                    onClick={handleSidebar}
                    className={
                        sidebar.burger ? "fixed w-[30%] h-screen" : "hidden"
                    }
                />
                <div
                    className={`
                        ${
                            sidebar.burger ? "w-[70%]" : "w-0"
                        } fixed right-0 h-screen  bg-white shadow-md  transition-all duration-500
                    `}
                >
                    <div className="flex flex-col p-4 gap-2 ">
                        {menu.map((i: any, index) => (
                            <div className="border-b">
                                <div
                                    onClick={() =>
                                        // @ts-ignore
                                        sidebar[i.name]
                                            ? setSidebar((val) => ({
                                                  ...val,
                                                  [i.name]: false,
                                              }))
                                            : setSidebar((val) => ({
                                                  ...val,
                                                  [i.name]: true,
                                              }))
                                    }
                                    className="flex justify-between items-center"
                                >
                                    <div className="capitalize">{i.name}</div>
                                    {i.children && (
                                        <svg
                                            height="16"
                                            width="14"
                                            viewBox="0 0 448 512"
                                            className={`${
                                                //@ts-ignore
                                                sidebar[i.name]
                                                    ? "rotate-180"
                                                    : ""
                                            } transition-transform `}
                                        >
                                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    )}
                                </div>
                                {i.children &&
                                    i.children.map((c: any) => (
                                        <div
                                            className={`${
                                                // @ts-ignore
                                                sidebar[i.name]
                                                    ? "max-h-64 duration-1000"
                                                    : "max-h-0 duration-300"
                                            } flex justify-between ml-4 items-center cursor-pointer transition-all overflow-hidden`}
                                        >
                                            <div>{c.name}</div>
                                            {c.children && <div>yes</div>}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
