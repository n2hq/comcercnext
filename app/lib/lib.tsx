export const config = {
    BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL
}

export const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "cache": "no-store"
}

export const getSearch: any = async (criteria: string) => {
    console.log(config.BASE_URL)
    const endpoint = "/api/listing/search?q=" + criteria
    const url = config.BASE_URL + endpoint



    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getFeaturedListing: any = async () => {

    const endpoint = `/api/listing/featured_listing`
    const url = config.BASE_URL + endpoint



    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}
