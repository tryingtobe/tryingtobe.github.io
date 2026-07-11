export interface NowPlaying {
title: string;
artist: string;
albumArt: string;
spotifyId?: string;
}

export interface AlbumReview {
slug: string;
title: string;
artist: string;
review: string;
spotifyId: string;
rating?: number;
}

export interface MonthEntry {
month: string;
playlistId?: string;
albums?: AlbumReview[];
}

export const nowPlaying: NowPlaying = {
title: "Replace with a track title",
artist: "Artist name",
albumArt: "https://i.scdn.co/image/ab67616d0000b273placeholder",
spotifyId: "0VjIjW4GlUZAMYd2vXMi3b",
};

export interface FavoriteAlbum {
spotifyId: string;
}

export const favoriteAlbums: FavoriteAlbum[] = [
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
{ spotifyId: "4LH4d3cOWNNsVw41Gqt2kv" },
];

export const musicLog: MonthEntry[] = [
{
month: "July 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
albums: [
{
slug: "placeholder-album-one",
title: "Replace with an album title",
artist: "Artist name",
review: "Write your thoughts on this album here.",
spotifyId: "4LH4d3cOWNNsVw41Gqt2kv",
rating: 4.5,
},
],
},
{
month: "June 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
albums: [
{
slug: "placeholder-album-two",
title: "Replace with an album title",
artist: "Artist name",
review: "Write your thoughts on this album here.",
spotifyId: "4LH4d3cOWNNsVw41Gqt2kv",
rating: 4,
},
],
},
{
month: "May 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
{
month: "April 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
{
month: "March 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
{
month: "February 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
{
month: "January 2026",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
{
month: "December 2025",
playlistId: "37i9dQZEVXbMDoHDwVN2tF",
},
];




