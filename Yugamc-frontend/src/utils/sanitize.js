/**
 * Safely sanitizes an HTML string using the browser's DOMParser.
 * Only allows a safe whitelist of text-formatting tags and attributes.
 * Unsafe elements are converted to harmless text nodes.
 */
export const sanitizeHtml = (html) => {
  if (!html) return '';
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const allowedTags = ['H4', 'B', 'STRONG', 'BR', 'P', 'SPAN', 'I', 'EM', 'UL', 'OL', 'LI'];
    const allowedAttributes = ['class'];

    const sanitizeElement = (element) => {
      const children = Array.from(element.childNodes);
      for (const node of children) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const tagName = node.tagName.toUpperCase();
          if (!allowedTags.includes(tagName)) {
            // Replace unsafe tag with its plain text representation
            const textNode = doc.createTextNode(node.textContent);
            element.replaceChild(textNode, node);
          } else {
            // Strip any attributes not in the allowed list
            const attrs = Array.from(node.attributes);
            for (const attr of attrs) {
              if (!allowedAttributes.includes(attr.name.toLowerCase())) {
                node.removeAttribute(attr.name);
              }
            }
            // Recurse into allowed elements
            sanitizeElement(node);
          }
        }
      }
    };

    sanitizeElement(doc.body);
    return doc.body.innerHTML;
  } catch (error) {
    console.error('HTML Sanitization failed, using escaping fallback:', error);
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
};
