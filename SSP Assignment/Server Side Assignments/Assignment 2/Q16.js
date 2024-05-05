function parseURL(urlString) {
    try {
        const url = new URL(urlString);
        return {
            protocol: url.protocol,
            hostname: url.hostname,
            port: url.port,
            pathname: url.pathname,
            search: url.search,
            hash: url.hash,
            username: url.username,
            password: url.password,
            origin: url.origin
        };
    } catch (error) {
        console.error("Invalid URL:", urlString);
        return null;
    }
}

// Example usage:
const urlString = "https://www.example.com:8080/path/to/resource?query=string#section";
const parsedURL = parseURL(urlString);
console.log(parsedURL);