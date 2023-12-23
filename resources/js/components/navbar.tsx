import { useEffect, useRef, useState } from "react";

const menu = [
    {
        name: "Home",
        link: "/",
        children: "",
    },
    {
        name: "Profil",
        link: "",
        children: [
            {
                name: "Sambutan",
                link: "sambutan",
            },
            {
                name: "Visi & Misi",
                link: "visi-misi",
            },
            {
                name: "Struktur Pemerintahan",
                link: "struktur-pemerintahan",
            },
            {
                name: "Peta Desa",
                link: "peta-desa",
            },
        ],
    },
    {
        name: "Informasi",
        link: "",
        children: [
            {
                name: "Pengumuman",
                link: "pengumuan",
            },
            {
                name: "KTP",
                link: "ktp",
            },
            {
                name: "KK",
                link: "kk",
            },
            {
                name: "Akta",
                link: "akta",
            },
        ],
    },
    {
        name: "Lembaga Desa",
        link: "",
        children: [
            {
                name: "Karang Taruna",
                link: "karang-taruna",
            },
            {
                name: "PKK",
                link: "pkk",
            },
            {
                name: "Bumdes",
                link: "bumdes",
            },
        ],
    },
    {
        name: "E-Doc",
        link: "",
        children: [
            {
                name: "Surat Menyurat",
                link: "surat-menyurat",
            },
            {
                name: "Undang-Undang",
                link: "undang-undang",
            },
            {
                name: "Perencanaan Pembangunan",
                link: "perencanaan-pembangunan",
            },
        ],
    },
];

export default function Navbar() {
    const [navbar, setNavbar] = useState({
        Profil: false,
        Informasi: false,
        "Lembaga Desa": false,
        "E-Doc": false,
    });
    const [sidebar, setSidebar] = useState({
        burger: false,
        Profil: { active: false, height: 0 },
        Informasi: { active: false, height: 0 },
        "Lembaga Desa": { active: false, height: 0 },
        "E-Doc": { active: false, height: 0 },
    });
    const getHeight = useRef({
        Profil: 0,
        Informasi: 0,
        "Lembaga Desa": 0,
        "E-Doc": 0,
    });

    useEffect(() => {
        //@ts-ignore
        const Profil = getHeight.current.Profil.scrollHeight;
        //@ts-ignore
        const Informasi = getHeight.current.Informasi.scrollHeight;
        //@ts-ignore
        const Lembaga = getHeight.current["Lembaga Desa"].scrollHeight;
        //@ts-ignore
        const Doc = getHeight.current["E-Doc"].scrollHeight;

        setSidebar((val) => ({
            ...val,
            Profil: { ...val.Profil, height: Profil },
            Informasi: { ...val.Informasi, height: Informasi },
            "Lembaga Desa": { ...val["Lembaga Desa"], height: Lembaga },
            "E-Doc": { ...val["E-Doc"], height: Doc },
        }));
    }, []);

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
                <div className="max-md:hidden flex flex-row gap-6">
                    {menu.map((i: any, index) => (
                        <div key={index} className="relative flex h-16">
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
                                        className="fill-gray-500 ml-1"
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
                                        className="absolute p-3 top-16 bg-white shadow-md rounded-md"
                                    >
                                        {i.children.map((c: any) => (
                                            <div
                                                key={c.name}
                                                className="text-nowrap"
                                            >
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
                            <div key={index} className="border-b ">
                                <div
                                    onClick={() =>
                                        // @ts-ignore
                                        sidebar[i.name]["active"]
                                            ? setSidebar((val) => ({
                                                  ...val,
                                                  [i.name]: {
                                                      //@ts-ignore
                                                      ...val[i.name],
                                                      active: false,
                                                  },
                                              }))
                                            : setSidebar((val) => ({
                                                  ...val,
                                                  [i.name]: {
                                                      //@ts-ignore
                                                      ...val[i.name],
                                                      active: true,
                                                  },
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
                                                sidebar[i.name]["active"]
                                                    ? "-rotate-90"
                                                    : ""
                                            } transition-transform duration-500`}
                                        >
                                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    )}
                                </div>
                                <div
                                    //@ts-ignore
                                    ref={(element) =>
                                        //@ts-ignore
                                        (getHeight.current[i.name] = element)
                                    }
                                    className={`
                                    ${
                                        // @ts-ignore
                                        sidebar[i.name]?.active
                                            ? "h-[" +
                                              // @ts-ignore
                                              sidebar[i.name]["height"] +
                                              "px]"
                                            : "h-[0px]"
                                    }
                                            ml-4 bg-blue-500 transition-all duration-500 overflow-hidden
                                    `}
                                >
                                    {i.children &&
                                        i.children.map((c: any) => (
                                            <div
                                                key={c.name}
                                                className="flex justify-between items-center cursor-pointer"
                                            >
                                                <div>{c.name}</div>
                                                {c.children && <div>yes</div>}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
