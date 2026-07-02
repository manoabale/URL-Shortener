document.getElementById("shortenBtn").addEventListener("click", shortenURL);
document.getElementById("copyBtn").addEventListener("click", copyURL);

async function shortenURL() {
  const longUrl = document.getElementById("urlInput").value;

  if (!longUrl) {
    alert("Please enter a URL");
    return;
  }

  const api = `https://api.shrtco.de/v2/shorten?url=${longUrl}`;

  try {
    const response = await fetch(api);
    const data = await response.json();

    const shortUrl = data.result.short_link;
    document.getElementById("shortUrl").textContent = shortUrl;
  } catch (error) {
    document.getElementById("shortUrl").textContent = "Error shortening URL";
  }
}

function copyURL() {
  const text = document.getElementById("shortUrl").textContent;

  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}
