import { renderToString } from 'react-dom/server';

const htmlTemplate = (content, scriptTags, linkTags, styleTags) => {
    const html =
        `<!DOCTYPE html>
        <html>
            <head>
                <title>Bus Timetable</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                ${linkTags}
                ${styleTags}
            </head>
            <body>
                <div id="root">${content}</div>
                ${scriptTags}
            </body>
        </html>`;
    return html;
}

export default (content, scriptTags, linkTags, styleTags) => {
    return htmlTemplate(renderToString(content), scriptTags, linkTags, styleTags);
}