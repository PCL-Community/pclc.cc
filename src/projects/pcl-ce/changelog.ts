import axios from "axios";
import MarkdownIt from "markdown-it";

export interface Release {
    name: string;
    body: string;
}

export async function getReleases(): Promise<Release[]> {
    let release: Release[] = [];
    return (await axios.get<Release[]>("https://api.github.com/repos/PCL-Community/PCL2-CE/releases")).data;
}

export function renderMD(markdown: string): string {
    const mdRenderer = new MarkdownIt();

    const matchedNames: RegExpMatchArray | null = markdown.match(/\@[A-Z.a-z.0-9.\-]*/g);
    if (matchedNames != null)
        for (let name of new Set(matchedNames)) {
            markdown = markdown.replaceAll(name, `**${name.substring(1)}**`);
            markdown = markdown.replaceAll(
                `**${name.substring(1)}**`,
                `[**${name}**](https://github.com/${name.substring(1)})`
            );
        }

    const matchedUrls: RegExpMatchArray | null = markdown.match(/https:\/\/github.com[\/[A-Z.a-z.0-9.\..\-]*]*/g);
    const matchedLinks: RegExpMatchArray | null = markdown.match(/\[<samp>[\S]*<\/samp>\]\([\S]*\)/g);
    const matchedCompare: RegExpMatchArray | null = markdown.match(/\[View changes on GitHub\]\([\S]*\)/g);
    if (matchedLinks != null)
        for (let url of matchedLinks) {
            let replaced = url.replace("<samp>(", "").replace(")</samp>", "");
            markdown = markdown.replaceAll(
                url,
                replaced.substring(replaced.indexOf("(") + 1, replaced.lastIndexOf(")"))
            );
        }
    if (matchedCompare != null)
        for (let url of matchedCompare)
            markdown = markdown.replaceAll(url, url.substring(url.indexOf("(") + 1, url.lastIndexOf(")")));
    if (matchedUrls != null)
        for (let url of matchedUrls) {
            let matchedIssues = url.match("issues");
            let matchedPulls = url.match("pull");
            let matchedCompare = url.match("compare");
            let matchedCommits = url.match("commit");
            if (matchedPulls != null)
                markdown = markdown.replaceAll(url, `[**\`PR #${url.substring(url.lastIndexOf("/") + 1)}\`**](${url})`);
            if (matchedIssues != null)
                markdown = markdown.replaceAll(
                    url,
                    `[**\`Issue #${url.substring(url.lastIndexOf("/") + 1)}\`**](${url})`
                );
            if (matchedCommits != null)
                markdown = markdown.replaceAll(
                    url,
                    `[**\`Commit ${url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("/") + 7)}\`**](${url})`
                );
            if (matchedCompare != null) {
                markdown = markdown.replaceAll(url, `[**\`${url.substring(url.lastIndexOf("/") + 1)}\`**](${url})`);
                markdown = markdown.substring(0, markdown.lastIndexOf(url) + url.length + 1);
            }
        }

    let html = mdRenderer.render(markdown);
    return html;
}
