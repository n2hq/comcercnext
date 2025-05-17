import mysql, { Pool, PoolConnection } from "mysql2/promise";

declare global {
    var mysqlPool: Pool | null
}

let cachedPool: Pool | null = global.mysqlPool || null

const DATABASE_HOST = process.env.NEXT_PUBLIC_DATABASE_HOST
const DATABASE_PORT = process.env.NEXT_PUBLIC_DATABASE_PORT
const DATABASE_NAME = process.env.NEXT_PUBLIC_DATABASE_NAME
const DATABASE_PASS = process.env.NEXT_PUBLIC_DATABASE_PASS
const DATABASE_USER = process.env.NEXT_PUBLIC_DATABASE_USER

if (!cachedPool) {
    cachedPool = global.mysqlPool = mysql.createPool({
        host: DATABASE_HOST as string,
        port: Number(DATABASE_PORT) || 3306,
        user: DATABASE_USER as string,
        password: DATABASE_PASS as string,
        database: DATABASE_NAME as string,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
}

export async function getConnection(): Promise<PoolConnection> {
    return cachedPool!.getConnection()
}

export async function query<T = any>(sql: string, values: any[] = []): Promise<any> {
    const connection = await getConnection()
    try {
        const [results] = await connection.execute<any>(sql, values)
        connection.commit()
        return results
    } finally {
        connection.release()
    }
}

