import db from "../Db/db.js";
const table = "users";
class UserModel{
    static async createUserModel({name,email,password}){
        const sql=`INSERT INTO ${table}(name,email,password) VALUES(?,?,?)`;
        const[result]=await db.execute(sql,[name,email,password])
        //[inserted,rows affected]
    return result.insertId;   
 }

static async getAllUsersModel(){
    const sql=`SELECT * FROM ${table}`;
    const [rows]=await db.execute(sql);
    return rows;
}
static async updateUserPasswordModel(id,{password}){
    const sql=`UPDATE ${table} SET password=? WHERE id=?`;
    const[update]=await db.execute(sql,[password,id]);
    return update.affectedRows;
}
static async deleteUserModel(id){
    const sql=`DELETE FROM ${table} WHERE id=?`;
    const[del]=await db.execute(sql,[id]);
    return del.affectedRows;
}
}
export default UserModel