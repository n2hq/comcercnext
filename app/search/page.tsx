'use server'

import React from 'react'
import ResponsiveNav from '../components/header/lite/ResponsiveNav'
import SearchBox from '../components/content/SearchBox'
import { getSearch } from '../lib/lib'
import ResultLayout from './assets/ResultLayout'
import SearchPagination from './assets/SearchPagination'
import { PageProps } from '@/.next/types/app/page'




const page = async ({ searchParams }: PageProps) => {
    const params = await searchParams
    const query = params.q ?? '';


    let data: any = []

    try {
        data = await getSearch(query)
        //console.log(data)

    } catch (error: any) {
        console.log(error.message)
    }



    return (
        <div>
            <ResponsiveNav theme='dark' />

            <div className={` w-full  bg-yellow-400
                flex flex-col justify-center`}>
                <div className={`mt-19 mb-5`}>
                    <SearchBox />
                </div>
            </div>

            <ResultLayout>
                {
                    data.length > 0 ?
                        <SearchPagination
                            data={data}
                            itemsPerPage={20}
                        /> :
                        <div className={`flex place-items-center
                            place-content-center p-8 border capitalize`}>
                            <span>no record</span>
                        </div>
                }
            </ResultLayout>

        </div>
    )
}

export default page
