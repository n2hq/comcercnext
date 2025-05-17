import { NextResponse as api, NextRequest } from 'next/server';
import { query } from '../../mysql';
import Error from 'next/error';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {

    try {
        const { id } = await params

        const rows = await query(`SELECT 
            d.*,
            c.name AS country_name,
            s.name AS state_name,
            ci.name AS city_name
            FROM tbl_dir d
            LEFT JOIN tbl_country c ON d.country_code = c.iso2 AND d.country_code IS NOT NULL AND d.country_code != ''
            LEFT JOIN tbl_state s ON d.state_code = s.iso2 AND d.state_code IS NOT NULL AND d.state_code != ''
            LEFT JOIN tbl_city ci ON d.city_id = ci.id AND d.city_id IS NOT NULL AND d.city_id != ''
            WHERE (d.gid = ? OR d.username = ?)
            `, [id, id])

        if ((rows).length <= 0) {
            return api.json({}, { status: 200 })
        }

        return api.json(rows[0], { status: 200 })

    } catch (error: any) {

        return api.json({ "message": error.message }, { status: 500 })
    }
}