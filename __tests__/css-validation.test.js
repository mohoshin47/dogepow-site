const fs = require('fs');
const path = require('path');

let css;

beforeAll(() => {
  css = fs.readFileSync(path.resolve(__dirname, '..', 'style.css'), 'utf-8');
});

describe('CSS File', () => {
  test('style.css exists and is not empty', () => {
    expect(css.length).toBeGreaterThan(0);
  });

  test('has no unclosed braces', () => {
    const openBraces = (css.match(/{/g) || []).length;
    const closeBraces = (css.match(/}/g) || []).length;
    expect(openBraces).toBe(closeBraces);
  });
});

describe('Global Styles', () => {
  test('defines a universal reset (* selector)', () => {
    expect(css).toMatch(/\*\s*\{[^}]*margin\s*:\s*0/);
    expect(css).toMatch(/\*\s*\{[^}]*padding\s*:\s*0/);
    expect(css).toMatch(/\*\s*\{[^}]*box-sizing\s*:\s*border-box/);
  });

  test('sets Poppins as the font family', () => {
    expect(css).toMatch(/font-family\s*:\s*['"]?Poppins['"]?/);
  });

  test('sets body background to dark color', () => {
    expect(css).toMatch(/body\s*\{[^}]*background\s*:\s*#050816/);
  });

  test('sets body text color to white', () => {
    expect(css).toMatch(/body\s*\{[^}]*color\s*:\s*white/);
  });
});

describe('Header Styles', () => {
  test('header uses flexbox layout', () => {
    expect(css).toMatch(/header\s*\{[^}]*display\s*:\s*flex/);
  });

  test('header is sticky positioned', () => {
    expect(css).toMatch(/header\s*\{[^}]*position\s*:\s*sticky/);
  });

  test('header has a z-index', () => {
    expect(css).toMatch(/header\s*\{[^}]*z-index\s*:\s*100/);
  });
});

describe('Brand Colors', () => {
  test('uses the primary green accent color (#00ff88)', () => {
    const matches = css.match(/#00ff88/gi);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThanOrEqual(3);
  });

  test('logo uses the primary accent color', () => {
    expect(css).toMatch(/\.logo\s*\{[^}]*color\s*:\s*#00ff88/);
  });
});

describe('Hero Section Styles', () => {
  test('hero uses flexbox layout', () => {
    expect(css).toMatch(/\.hero\s*\{[^}]*display\s*:\s*flex/);
  });

  test('hero has min-height of 100vh', () => {
    expect(css).toMatch(/\.hero\s*\{[^}]*min-height\s*:\s*100vh/);
  });

  test('hero image has a defined width', () => {
    expect(css).toMatch(/\.hero-right\s+img\s*\{[^}]*width\s*:\s*350px/);
  });
});

describe('Card Styles', () => {
  test('cards container uses CSS grid', () => {
    expect(css).toMatch(/\.cards\s*\{[^}]*display\s*:\s*grid/);
  });

  test('cards are responsive with auto-fit', () => {
    expect(css).toMatch(/\.cards\s*\{[^}]*grid-template-columns\s*:\s*repeat\(\s*auto-fit/);
  });

  test('individual card has border-radius', () => {
    expect(css).toMatch(/\.card\s*\{[^}]*border-radius\s*:\s*20px/);
  });

  test('individual card has a border using the accent color', () => {
    expect(css).toMatch(/\.card\s*\{[^}]*border\s*:\s*1px\s+solid\s+#00ff88/);
  });
});

describe('Gallery Styles', () => {
  test('gallery uses CSS grid', () => {
    expect(css).toMatch(/\.gallery\s*\{[^}]*display\s*:\s*grid/);
  });

  test('gallery images have border-radius', () => {
    expect(css).toMatch(/\.gallery\s+img\s*\{[^}]*border-radius\s*:\s*20px/);
  });
});

describe('Form Styles', () => {
  test('form uses flexbox column layout', () => {
    expect(css).toMatch(/form\s*\{[^}]*display\s*:\s*flex/);
    expect(css).toMatch(/form\s*\{[^}]*flex-direction\s*:\s*column/);
  });

  test('form is centered with margin auto', () => {
    expect(css).toMatch(/form\s*\{[^}]*margin\s*:\s*auto/);
  });

  test('inputs have styled background', () => {
    expect(css).toMatch(/input[\s\S]*\{[^}]*background\s*:\s*#0c1326/);
  });

  test('button has cursor pointer', () => {
    expect(css).toMatch(/button\s*\{[^}]*cursor\s*:\s*pointer/);
  });
});

describe('Responsive Design', () => {
  test('has a media query for max-width 900px', () => {
    expect(css).toMatch(/@media\s*\(\s*max-width\s*:\s*900px\s*\)/);
  });

  test('hero becomes column layout on small screens', () => {
    const mediaBlock = css.match(/@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{([\s\S]*)\}/);
    expect(mediaBlock).not.toBeNull();
    expect(mediaBlock[1]).toContain('flex-direction:column');
  });

  test('hero font size reduces on small screens', () => {
    const mediaBlock = css.match(/@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{([\s\S]*)\}/);
    expect(mediaBlock).not.toBeNull();
    expect(mediaBlock[1]).toContain('font-size:42px');
  });

  test('stats become column layout on small screens', () => {
    const mediaBlock = css.match(/@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{([\s\S]*)\}/);
    expect(mediaBlock).not.toBeNull();
    expect(mediaBlock[1]).toMatch(/\.stats\s*\{[^}]*flex-direction\s*:\s*column/);
  });
});
