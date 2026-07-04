export interface Book {
	slug: string;
	title: string;
	author: string;
	rating: number;
	notes: string;
	month: string;
}

export const books: Book[] = [
	{ slug: 'example-book-nov-2025', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'November 2025' },
	{ slug: 'example-book-dec-2025', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'December 2025' },
	{ slug: 'example-book-jan-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'January 2026' },
	{ slug: 'example-book-feb-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'February 2026' },
	{ slug: 'example-book-mar-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'March 2026' },
	{ slug: 'example-book-apr-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'April 2026' },
	{ slug: 'example-book-may-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'May 2026' },
	{ slug: 'example-book-jun-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'June 2026' },
	{ slug: 'example-book-jul-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, notes: 'A short note about what you thought of it.', month: 'July 2026' },
];
