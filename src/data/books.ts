export interface Book {
	slug: string;
	title: string;
	author: string;
	rating: number;
	quote: string;
	notes: string;
	month: string;
	isbn: string;
}

export const books: Book[] = [
	{ slug: 'the-poppy-war-rf-kuang', title: 'The Poppy War', author: 'R.F. Kuang', rating: 4.15, quote: 'Fear was impossible to eradicate. But so was the will to survive.', notes: '', month: 'November 2025', isbn: '9780062662569' },
	{ slug: 'babel-rf-kuang', title: 'Babel, or The Necessity of Violence', author: 'R.F. Kuang', rating: 4.13, quote: '"Be selfish," he whispered. "Be brave."', notes: '', month: 'November 2025', isbn: '9780063021426' },
	{ slug: 'example-book-dec-2025', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'December 2025', isbn: '9780143127550' },
	{ slug: 'example-book-jan-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'January 2026', isbn: '9780143127550' },
	{ slug: 'example-book-feb-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'February 2026', isbn: '9780143127550' },
	{ slug: 'example-book-mar-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'March 2026', isbn: '9780143127550' },
	{ slug: 'example-book-apr-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'April 2026', isbn: '9780143127550' },
	{ slug: 'example-book-may-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'May 2026', isbn: '9780143127550' },
	{ slug: 'example-book-jun-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'June 2026', isbn: '9780143127550' },
	{ slug: 'example-book-jul-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'July 2026', isbn: '9780143127550' },
];
