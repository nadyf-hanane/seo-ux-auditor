
export function analyzeUX(url) {

    const length = url.length;

    const depth = url.split("/").length - 3; 
  
    const isHumanReadable = !url.includes("?") && !url.includes("=") && !url.includes("%");

    return {
        urlLength: length,          
        depth: depth,                
        isHumanReadable: isHumanReadable 
    };
}
