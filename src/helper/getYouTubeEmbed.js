export default function getYouTubeEmbed(url) {
  const regex = /(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}