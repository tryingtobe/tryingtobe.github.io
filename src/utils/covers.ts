export async function getCoverUrl(isbn: string): Promise<string> {
	try {
		const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
		const data = await res.json();
		const thumb = data?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
		if (thumb) {
			return thumb.replace("http://", "https://");
		}
	} catch (e) {
		// fall through to Open Library
	}
	return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}
