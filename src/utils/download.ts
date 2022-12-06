export function triggerFileDownloadFromLink(
  link: string,
  filename: string = ""
) {
  const linkElement = window.document.createElement("a");
  linkElement.href = link;
	linkElement.target = "_blank";
  if (filename !== "") {
    linkElement.setAttribute("download", filename);
  }
  window.document.body.appendChild(linkElement);
  linkElement.click();
  window.document.body.removeChild(linkElement);
}
