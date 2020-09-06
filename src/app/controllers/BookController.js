import Book from '../models/Book';

class BookController {
    async store(request, response) {
        const { title } = request.body;

        if (!title) {
            return response.status(400)
                .json({ error: 'Title not found, is mandatory.' });
        }

        const titleExit = await Book.findOne({ where: { title } });

        if (titleExit) {
            return response.status(400).json({ error: 'Title aldredy exists.' });
        }

        const book = await Book.create(request.body);

        return response.json({ book });
    }

    async index(request, response) {
        const { title } = request.query;

        const books = title ? await Book.findOne({ where: { title } }) : await Book.findAll();

        if (!books) {
            return response.status(400).json({ error: 'Book not found.' });
        }

        return response.json(books);
    }

    async delete(request, response) {
        const { id } = request.params;

        await Book.destroy({ where: { id } });

        return response.send();
    }
}

export default new BookController();

