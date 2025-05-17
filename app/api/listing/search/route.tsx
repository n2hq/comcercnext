import { NextRequest, NextResponse as api } from "next/server"
import { query } from "../../mysql"

export async function GET(request: NextRequest) {

    try {
        const { searchParams } = new URL(request.url);
        let criteria = searchParams.get('q');

        if (criteria === "" || criteria === null || criteria === undefined) {
            criteria = ""
        }

        let rawdata: any = await query(`SELECT DISTINCT
            d.*,
            co.name AS country_name,
            st.name AS state_name,
            ci.name AS city_name,
            b.image_url AS image_url 
            FROM tbl_dir d
            LEFT JOIN tbl_country co ON d.country_code = co.iso2
            LEFT JOIN tbl_state st ON d.state_code = st.iso2
            LEFT JOIN tbl_city ci ON d.city_id = ci.id
            LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid
            WHERE 
            (d.title RLIKE ?
            OR d.short_description RLIKE ?
            OR d.category RLIKE ?
            )
            GROUP BY 
            d.gid
            ORDER BY
            d.date_created
            ASC
            LIMIT 0, 50`, [criteria, criteria, criteria])

        if (criteria === "" || criteria === null || criteria === undefined) {
            rawdata = await query(`SELECT DISTINCT
                d.*,
                co.name AS country_name,
                st.name AS state_name,
                ci.name AS city_name,
                b.image_url AS image_url 
                FROM tbl_dir d
                LEFT JOIN tbl_country co ON d.country_code = co.iso2
                LEFT JOIN tbl_state st ON d.state_code = st.iso2
                LEFT JOIN tbl_city ci ON d.city_id = ci.id
                LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid
                GROUP BY 
                d.gid
                ORDER BY
                d.date_created
                ASC
                LIMIT 0, 50`)
        }

        if ((rawdata as any[]).length <= 0) {
            return api.json([], { status: 200 })
        }

        return api.json(rawdata, { status: 200 })

    } catch (error: any) {
        return api.json({ "message": error.message }, { status: 500 })
    }
}