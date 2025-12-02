
export function getUrlDepth(url) {

    const parts = url.split("/");

    return parts.length - 3;
}


export function isHumanReadableUrl(url) {
    return !url.includes("?") && !url.includes("=") && !url.includes("%");
}

export function getUrlLength(url) {
    return url.length;
}
