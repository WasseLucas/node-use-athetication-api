import { Pool } from "pg";

const connectionString = 'postgres://vzlzzjrh:D-jNIddlL3uNtj_MncyyIs1t0MwainDX@kesavan.db.elephantsql.com/vzlzzjrh';

const db = new Pool({ connectionString });

export default db ;