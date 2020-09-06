import { BaseDatabase } from "./BaseDatabase.js";

export class BookDatabase extends BaseDatabase{
    async createBook(values){
        try {
            await this.getConnection().insert(values).into(process.env.BOOKS_DB_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getAllBooks(){
        try {
            const books = await this.getConnection().select('*').from(process.env.BOOKS_DB_NAME);

            return books;
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async deleteBook(id){
        try {
            await this.getConnection().delete().from(process.env.BOOKS_DB_NAME).where({id});
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async searchByTitle(title){
        try {
            const books = await this.getConnection().select('*').from(process.env.BOOKS_DB_NAME).where("title", "like", `%${title}%`);

            return books;
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}