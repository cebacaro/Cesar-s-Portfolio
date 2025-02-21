// import React, { useEffect, useState } from "react";
// import dotenv from "dotenv";
// import Image from "next/image";
// dotenv.config();

// interface AlbumData {
//   name: string;
//   artists: { name: string }[];
//   images: { url: string }[];
//   external_urls: { spotify: string };
// }

// const SpotifyPlayer = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [data, setData] = useState<AlbumData | null>(null);

//   const albumId = "6JdMilTZ2GG4Td8Dt4Xcjc";
//   const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
//   const secret_key = process.env.NEXT_PUBLIC_SPOTIFY_SECRET_KEY;

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const authParameter = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${secret_key}`,
//         };

//         const response = await fetch(
//           "https://accounts.spotify.com/api/token",
//           authParameter
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch token: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setToken(data.access_token);
//       } catch (error) {
//         console.error("Error fetching token:", error);
//       }
//     };

//     if (client_id && secret_key) {
//       fetchToken();
//     } else {
//       console.error("Missing Spotify API credentials.");
//     }
//   }, [client_id, secret_key]);

//   useEffect(() => {
//     const fetchAlbumData = async () => {
//       if (!token) return;

//       try {
//         const headers = {
//           Authorization: `Bearer ${token}`,
//         };

//         const response = await fetch(
//           `https://api.spotify.com/v1/albums/${albumId}`,
//           { headers }
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch album data: ${response.statusText}`);
//         }
//         const data: AlbumData = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error("Error fetching album data:", error);
//       }
//     };

//     fetchAlbumData();
//   }, [token, albumId]);

//   return (
//     <div className="flex">
//       {data && (
//         <div className="mt-8 flex flex-col items-center">
//           <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
//           <p className="text-lg text-gray-600">
//             By {data.artists.map((artist) => artist.name).join(", ")}
//           </p>
//           <Image
//             src={data.images[0]?.url}
//             alt={data.name}
//             width={300}
//             height={300}
//             className="rounded-md mt-4"
//           />
//         </div>
//       )}
//       <div className="mt-4">
//         <iframe
//           src={`https://open.spotify.com/embed/album/${albumId}`}
//           width="300"
//           height="380"
//           frameBorder="0"
//           allow="encrypted-media"
//           className="rounded-lg"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default SpotifyPlayer;
