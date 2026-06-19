/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

let document;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
  document = new DOMParser().parseFromString(html, 'text/html');
});

describe('HTML Document Structure', () => {
  test('has correct doctype and lang attribute', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
    expect(html).toMatch(/<!DOCTYPE html>/i);
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  test('has required meta tags in head', () => {
    const charset = document.querySelector('meta[charset]');
    expect(charset).not.toBeNull();
    expect(charset.getAttribute('charset')).toBe('UTF-8');

    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
    expect(viewport.getAttribute('content')).toContain('width=device-width');
  });

  test('has a title containing "DogePow"', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent).toContain('DogePow');
  });

  test('links to the stylesheet', () => {
    const link = document.querySelector('link[rel="stylesheet"][href="style.css"]');
    expect(link).not.toBeNull();
  });

  test('loads Google Fonts (Poppins)', () => {
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    expect(fontLink).not.toBeNull();
    expect(fontLink.getAttribute('href')).toContain('Poppins');
  });
});

describe('Header Section', () => {
  test('has a header element', () => {
    const header = document.querySelector('header');
    expect(header).not.toBeNull();
  });

  test('has a logo with "DogePow" text', () => {
    const logo = document.querySelector('header .logo');
    expect(logo).not.toBeNull();
    expect(logo.textContent).toContain('DogePow');
  });

  test('has navigation with correct links', () => {
    const nav = document.querySelector('header nav');
    expect(nav).not.toBeNull();

    const links = nav.querySelectorAll('a');
    expect(links.length).toBe(4);

    const hrefs = Array.from(links).map(l => l.getAttribute('href'));
    expect(hrefs).toContain('#home');
    expect(hrefs).toContain('#features');
    expect(hrefs).toContain('#screenshots');
    expect(hrefs).toContain('#contact');
  });

  test('navigation link text matches expected labels', () => {
    const links = document.querySelectorAll('header nav a');
    const texts = Array.from(links).map(l => l.textContent.trim());
    expect(texts).toEqual(['Home', 'Features', 'Screenshots', 'Contact']);
  });
});

describe('Hero Section', () => {
  test('has a hero section with id "home"', () => {
    const hero = document.querySelector('section#home.hero');
    expect(hero).not.toBeNull();
  });

  test('has a headline', () => {
    const h1 = document.querySelector('.hero h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain('Mine Today');
    expect(h1.textContent).toContain('Earn Tomorrow');
  });

  test('has a descriptive paragraph', () => {
    const p = document.querySelector('.hero-left p');
    expect(p).not.toBeNull();
    expect(p.textContent.length).toBeGreaterThan(10);
  });

  test('has a download button linking to Google Play', () => {
    const btn = document.querySelector('.hero-left a.btn');
    expect(btn).not.toBeNull();
    expect(btn.getAttribute('href')).toContain('play.google.com');
    expect(btn.textContent.trim()).toBe('Download App');
  });

  test('has a hero image', () => {
    const img = document.querySelector('.hero-right img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('images/home.png');
  });
});

describe('Features Section', () => {
  let section;

  beforeAll(() => {
    section = document.querySelector('section#features');
  });

  test('has a features section with id "features"', () => {
    expect(section).not.toBeNull();
  });

  test('has a heading "Why DogePow?"', () => {
    const h2 = section.querySelector('h2');
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe('Why DogePow?');
  });

  test('has exactly 4 feature cards', () => {
    const cards = section.querySelectorAll('.card');
    expect(cards.length).toBe(4);
  });

  test('each feature card has a title and description', () => {
    const cards = section.querySelectorAll('.card');
    cards.forEach(card => {
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      expect(h3).not.toBeNull();
      expect(h3.textContent.length).toBeGreaterThan(0);
      expect(p).not.toBeNull();
      expect(p.textContent.length).toBeGreaterThan(0);
    });
  });

  test('feature cards contain expected titles', () => {
    const titles = Array.from(section.querySelectorAll('.card h3')).map(h => h.textContent);
    expect(titles).toContain('Secure Platform');
    expect(titles).toContain('Daily Rewards');
    expect(titles).toContain('Mining Boost');
    expect(titles).toContain('Referral Program');
  });
});

describe('Screenshots Section', () => {
  let section;

  beforeAll(() => {
    section = document.querySelector('section#screenshots');
  });

  test('has a screenshots section with id "screenshots"', () => {
    expect(section).not.toBeNull();
  });

  test('has heading "App Screenshots"', () => {
    const h2 = section.querySelector('h2');
    expect(h2.textContent).toBe('App Screenshots');
  });

  test('has a gallery with 4 images', () => {
    const images = section.querySelectorAll('.gallery img');
    expect(images.length).toBe(4);
  });

  test('gallery images reference correct files', () => {
    const srcs = Array.from(section.querySelectorAll('.gallery img')).map(img => img.getAttribute('src'));
    expect(srcs).toContain('images/home.png');
    expect(srcs).toContain('images/mining.png');
    expect(srcs).toContain('images/tasks.png');
    expect(srcs).toContain('images/withdraw.png');
  });
});

describe('Stats Section', () => {
  test('has a stats section', () => {
    const stats = document.querySelector('section.stats');
    expect(stats).not.toBeNull();
  });

  test('displays 3 stat items', () => {
    const items = document.querySelectorAll('section.stats > div');
    expect(items.length).toBe(3);
  });

  test('each stat has a value and label', () => {
    const items = document.querySelectorAll('section.stats > div');
    items.forEach(item => {
      expect(item.querySelector('h3')).not.toBeNull();
      expect(item.querySelector('span')).not.toBeNull();
    });
  });

  test('displays expected stat values', () => {
    const values = Array.from(document.querySelectorAll('section.stats h3')).map(h => h.textContent);
    expect(values).toContain('50K+');
    expect(values).toContain('1M+');
    expect(values).toContain('100+');
  });

  test('displays expected stat labels', () => {
    const labels = Array.from(document.querySelectorAll('section.stats span')).map(s => s.textContent);
    expect(labels).toContain('Users');
    expect(labels).toContain('Rewards');
    expect(labels).toContain('Countries');
  });
});
