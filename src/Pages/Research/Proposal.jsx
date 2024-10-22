import { Link } from "react-router-dom"

function Proposal() {
    return (
        <section className="col-span-5 ">
            <nav aria-label="Breadcrumb" className="flex justify-between pt-3">
                <ol className="flex overflow-hidden rounded-lg text-gray-600">
                    <li className="flex items-center">
                        <a
                            href="#"
                            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>

                            <span className="ms-1.5 text-xs font-medium"> Research </span>
                        </a>
                    </li>

                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                        >
                        </span>

                        <a
                            href="#"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                            Proposal
                        </a>
                    </li>
                </ol>
                <ol className="flex overflow-hidden rounded-lg text-gray-600">
                    <li className="flex items-center">
                        <Link
                            to="/research/proposal/add"
                            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                        >
                            Add
                        </Link>
                    </li>
                </ol>
            </nav>

            <div className="grid gap-3 py-6">
                <div className="rounded-lg border border-gray-200">
                    <div className="overflow-x-auto rounded-t-lg">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="text-left">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Submission Date
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Activity Title
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Proposal File
                                    </th>

                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        2022/05/03
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={ '30px' }>
                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        2022/05/03
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={ '30px' }>
                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        2022/05/03
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={ '30px' }>
                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        2022/05/03
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={ '30px' }>
                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        2022/05/03
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={ '30px' }>
                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                        <ol className="flex justify-end gap-1 text-xs font-medium">
                            <li>
                                <a href="#"
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                                    <span className="sr-only">Prev Page</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                    1
                                </a>
                            </li>

                            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                                2
                            </li>

                            <li>
                                <a href="#"
                                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                    3
                                </a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                    4
                                </a>
                            </li>

                            <li>
                                <a href="#"
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                                    <span className="sr-only">Next Page</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proposal