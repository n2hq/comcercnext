import { NextRequest, NextResponse as api } from "next/server"
import { query } from "../../mysql";



export async function GET() {

    try {
        const isFeatured = true

        const rows: any = await query(`SELECT 
            d.*,
            c.name AS country_name,
            s.name AS state_name,
            ci.name AS city_name
            FROM tbl_dir d
            LEFT JOIN tbl_country c ON d.country_code = c.iso2 AND d.country_code IS NOT NULL AND d.country_code != ''
            LEFT JOIN tbl_state s ON d.state_code = s.iso2 AND d.state_code IS NOT NULL AND d.state_code != ''
            LEFT JOIN tbl_city ci ON d.city_id = ci.id AND d.city_id IS NOT NULL AND d.city_id != ''
            WHERE (d.featured = ?)
            ORDER BY RAND()
            LIMIT 0, 10
            `, [isFeatured])



        if ((rows as any[]).length <= 0) {
            return api.json([], { status: 200 })
        }

        return api.json(rows, { status: 200 })

    } catch (error: any) {
        return api.json({ "message": error.message }, { status: 500 })
    }
}