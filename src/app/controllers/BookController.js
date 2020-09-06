import Book from '../models/Book';

class BookController {
    async store(request, response) {
        const { title } = request.body;

        if (!title) {
            return response.status(400).json({ error: 'Title not found, is mandatory.'});
        }

        const titleExit = await Book.findOne({ where: { title } });

        if (titleExit) {
            return response.status(400).json({ error: 'Title aldredy exists.' });
        }

        const book = await Book.create(request.body);

        return response.json({ book });
    }
}

export default new BookController();

