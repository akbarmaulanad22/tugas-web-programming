function Home() {
  return (
    <section className="col-span-5">
      <nav aria-label="Breadcrumb" className="flex pt-3">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
          <li className="flex items-center">
            <a href="#"
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>

              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </a>
          </li>
        </ol>
      </nav>
      <div className="grid gap-4 grid-cols-3 py-6">
        <div className="h-32 rounded-lg bg-gray-200 flex flex-col justify-evenly items-center">
          <h3>Penelitian</h3>
          <h1 className="font-semibold text-3xl">30</h1>
        </div>
        <div className="h-32 rounded-lg bg-blue-50 flex flex-col justify-evenly items-center">
          <h3>PKM</h3>
          <h1 className="font-semibold text-3xl">8</h1>
        </div>
        <div className="h-32 rounded-lg bg-slate-200 flex flex-col justify-evenly items-center">
          <h3>Total Pengajuan</h3>
          <h1 className="font-semibold text-3xl">38</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="grid gap-3 pb-6">
          <h2 className="text-2xl semibold">Data Pelitian</h2>
          <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Activity Title
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "30%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "40%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "20%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "66%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "79%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
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
        <div className="grid gap-3 pb-5">
          <h2 className="text-2xl semibold">Data PKM</h2>
          <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Activity Title
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "30%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "40%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "20%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "66%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Lorem ipsum dolor sit amet
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className='w-full  bg-gray-100 rounded-3xl h-2.5 '>
                        <div className='bg-indigo-600 h-2.5 rounded-3xl' style={ { width: "79%" } }></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <a href="#" className="bg-teal-700 text-white p-1 rounded-md">Update</a>
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
      </div>
    </section>
  );
}

export default Home;
