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
	{ slug: 'the-poppy-war-rf-kuang', title: 'The Poppy War (The Poppy War, #1)', author: 'R.F. Kuang', rating: 4.35, quote: 'Fear was impossible to eradicate. But so was the will to survive.', notes: '', month: 'December 2025', isbn: '9780062662569', coverUrl: 'https://books.google.com/books/content?id=c74wDwAAQBAJ&printsec=frontcover&img=1&zoom=1' },
{ slug: 'babel-rf-kuang', title: 'Babel, or The Necessity of Violence', author: 'R.F. Kuang', rating: 4.33, quote: 'Be selfish," he whispered. "Be brave.', notes: '', month: 'December 2025', isbn: '9780063021426', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677361825i/57945316.jpg' },
	{ slug: 'the-dragon-republic-rf-kuang', title: 'The Dragon Republic (The Poppy War, #2)', author: 'R.F. Kuang', rating: 4.63, quote: 'The only thing permanent about this Empire is war.', notes: '', month: 'January 2026', isbn: '9780062662637', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1540305594i/41212753.jpg' },
	{ slug: 'the-midnight-library-matt-haig', title: 'The Midnight Library (reread)', author: 'Matt Haig', rating: 3.85, quote: 'Sadness is intrinsically part of the fabric of happiness.', notes: '', month: 'January 2026', isbn: '9780525559481', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg' },
	{ slug: 'piranesi-susanna-clarke', title: 'Piranesi', author: 'Susanna Clarke', rating: 4.40, quote: 'In my mind are all the tides, their seasons, their ebbs and their flows.', notes: '', month: 'January 2026', isbn: '9781635577808' },
	{ slug: 'the-burning-god-rf-kuang', title: 'The Burning God (The Poppy War, #3)', author: 'R.F. Kuang', rating: 4.47, quote: 'Hate was its own kind of fire and if you had nothing else, it kept you warm.', notes: '', month: 'February 2026', isbn: '9780062662620', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1584965579i/45857086.jpg' },
	{ slug: 'the-sword-of-kaigen-ml-wang', title: 'The Sword of Kaigen: A Theonite War Story', author: 'M.L. Wang', rating: 4.25, quote: "I've never needed a sword to protect you, to raise you the way your father wanted. Caring for my family meant putting away the fighter, so I did.", notes: '', month: 'February 2026', isbn: '9781720193869', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1702907961i/41886271.jpg' },
	{ slug: 'before-i-let-go-kennedy-ryan', title: 'Before I Let Go', author: 'Kennedy Ryan', rating: 5, quote: 'But understanding how you got hurt never makes it hurt less.', notes: '', month: 'February 2026', isbn: '9781538706794', coverUrl: 'https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9781538706794_p0.jpg?v=1765318578' },
	{ slug: 'the-mademoiselle-alliance-natasha-lester', title: 'The Mademoiselle Alliance', author: 'Natasha Lester', rating: 4.25, quote: 'It was much easier to be what everyone wanted her to be...', notes: '', month: 'February 2026', isbn: '9780593726532', coverUrl: 'https://images4.penguinrandomhouse.com/cover/9780593726532' },
	{ slug: 'the-rage-of-dragons-evan-winter', title: 'The Rage of Dragons (The Burning, #1)', author: 'Evan Winter', rating: 4.37, quote: 'At its essence, isn\'t true leadership simply service?', notes: '', month: 'March 2026', isbn: '9780316489768', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1553927196i/41952489.jpg' },
	{ slug: 'the-jasad-heir-sara-hashem', title: 'The Jasad Heir (The Scorched Throne, #1)', author: 'Sara Hashem', rating: 4.52, quote: 'Does it hurt more when your failures have names? Does it hurt more to put a face to the people you have let down?', notes: '', month: 'March 2026', isbn: '9780356521862', coverUrl: 'https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9780316477864_p0.jpg?v=1764907433' },
	{ slug: 'the-jasad-crown-sara-hashem', title: 'The Jasad Crown (The Scorched Throne, #2)', author: 'Sara Hashem', rating: 4.64, quote: 'They could set fire to the world and convince us to dance in its ashes', notes: '', month: 'March 2026', isbn: '9780316478243', coverUrl: 'https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9780316478243_p0.jpg?v=1764907561' },
	{ slug: 'the-poet-empress-shen-tao', title: 'The Poet Empress', author: 'Shen Tao', rating: 4.76, quote: 'And if I had been stronger, less of a coward, I could have succeeded', notes: '', month: 'March 2026', isbn: '9781250406811', coverUrl: 'https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9781250406811_p0.jpg?v=1769014689' },
	{ slug: 'alchemised-senlinyu', title: 'Alchemised', author: 'SenLinYu', rating: 3.17, quote: 'They were the inverse and counter to each other. A healer and killer, circling slowly, the push and pull inexorable', notes: '', month: 'April 2026', isbn: '9780241714331' },
	{ slug: 'the-fire-of-vengeance-evan-winter', title: 'The Fire of Vengeance (The Burning, #2)', author: 'Evan Winter', rating: 4.28, quote: "You think your kudliwe can beat me?\" He laughed. \"Give him three swords, I'll kill him just the same.", notes: '', month: 'May 2026', isbn: '9780316489805', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1586795717i/43174603.jpg' },
	{ slug: 'persuasion-jane-austen', title: 'Persuasion', author: 'Jane Austen', rating: 4.56, quote: 'I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.', notes: '', month: 'June 2026', isbn: '9780141439686', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1385172413i/2156.jpg' },
{ slug: 'katabasis-rf-kuang', title: 'Katabasis', author: 'R.F. Kuang', rating: 4.23, quote: 'And if falling in love was discovery, was letting yourself be discovered the equivalent to being loved?', notes: '', month: 'June 2026', isbn: '9780008501877' },
{ slug: 'the-lion-women-of-tehran-marjan-kamali', title: 'The Lion Women of Tehran', author: 'Marjan Kamali', rating: 4.67, quote: "Lionesses. Us. Can't you just see it Ellie?", notes: '', month: 'June 2026', isbn: '9781668036594', coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1719409771i/199798217.jpg' },
	{ slug: 'example-book-jul-2026', title: 'Example Book Title', author: 'Author Name', rating: 4, quote: '', notes: 'A short note about what you thought of it.', month: 'July 2026', isbn: '9780143127550' },
];


























