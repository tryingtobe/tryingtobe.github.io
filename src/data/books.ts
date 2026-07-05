export interface Book {
	slug: string;
	title: string;
	author: string;
	rating: number;
	quote: string;
	notes: string;
	month: string;
	isbn: string;
	coverUrl?: string;
}

export const books: Book[] = [
	{ slug: 'the-poppy-war-rf-kuang', title: 'The Poppy War', author: 'R.F. Kuang', rating: 4.35, quote: 'Fear was impossible to eradicate. But so was the will to survive.', notes: '', month: 'December 2025', isbn: '9780062662569' },
	{ slug: 'babel-rf-kuang', title: 'Babel, or The Necessity of Violence', author: 'R.F. Kuang', rating: 4.33, quote: '"Be selfish," he whispered. "Be brave."', notes: '', month: 'December 2025', isbn: '9780063021426' },
	{ slug: 'the-dragon-republic-rf-kuang', title: 'The Dragon Republic', author: 'R.F. Kuang', rating: 4.63, quote: 'The only thing permanent about this Empire is war.', notes: '', month: 'January 2026', isbn: '9780062662637' },
	{ slug: 'the-midnight-library-matt-haig', title: 'The Midnight Library (reread)', author: 'Matt Haig', rating: 3.85, quote: 'Sadness is intrinsically part of the fabric of happiness.', notes: '', month: 'January 2026', isbn: '9780525559481' },
	{ slug: 'piranesi-susanna-clarke', title: 'Piranesi', author: 'Susanna Clarke', rating: 4.40, quote: 'In my mind are all the tides, their seasons, their ebbs and their flows.', notes: '', month: 'January 2026', isbn: '9781635577808' },
	{ slug: 'the-burning-god-rf-kuang', title: 'The Burning God', author: 'R.F. Kuang', rating: 4.47, quote: 'Hate was its own kind of fire and if you had nothing else...', notes: '', month: 'February 2026', isbn: '9780062662620' },
	{ slug: 'the-sword-of-kaigen-ml-wang', title: 'The Sword of Kaigen: A Theonite War Story', author: 'M.L. Wang', rating: 4.25, quote: 'Flayed and boneless, he faced the creature he had awakened, this woman of...', notes: '', month: 'February 2026', isbn: '9781720193869' },
	{ slug: 'before-i-let-go-kennedy-ryan', title: 'Before I Let Go', author: 'Kennedy Ryan', rating: 5, quote: 'But understanding how you got hurt never makes it hurt less.', notes: '', month: 'February 2026', isbn: '9781538706794', coverUrl: 'https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9781538706794_p0.jpg?v=1765318578' },
	{ slug: 'the-mademoiselle-alliance-natasha-lester', title: 'The Mademoiselle Alliance', author: 'Natasha Lester', rating: 4.25, quote: 'It was much easier to be what everyone wanted her to be...', notes: '', month: 'February 2026', isbn: '9780593726532', coverUrl: 'https://images4.penguinrandomhouse.com/cover/9780593726532' },
	{ slug: 'example-book-mar-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'March 2026', isbn: '9780143127550' },
	{ slug: 'example-book-apr-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'April 2026', isbn: '9780143127550' },
	{ slug: 'example-book-may-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'May 2026', isbn: '9780143127550' },
	{ slug: 'example-book-jun-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'June 2026', isbn: '9780143127550' },
	{ slug: 'example-book-jul-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'July 2026', isbn: '9780143127550' },
];
