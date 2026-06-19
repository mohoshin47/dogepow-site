/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let document;
let html;

beforeAll(() => {
  html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  document = new DOMParser().parseFromString(html, 'text/html');
});

describe('Local Asset Files', () => {
  test('style.css exists on disk', () => {
    expect(fs.existsSync(path.join(ROOT, 'style.css'))).toBe(true);
  });

  test('CNAME file exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'CNAME'))).toBe(true);
  });

  test('CNAME contains the domain', () => {
    const cname = fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf-8').trim();
    expect(cname).toBe('dogpow.xyz');
  });

  test('all referenced images exist on disk', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http')) {
        const exists = fs.existsSync(path.join(ROOT, src));
        expect(exists).toBe(true);
      }
    });
  });

  test('images directory contains exactly 4 PNGs', () => {
    const imagesDir = path.join(ROOT, 'images');
    const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));
    expect(files.length).toBe(4);
  });

  test('each expected image file exists', () => {
    const expected = ['home.png', 'mining.png', 'tasks.png', 'withdraw.png'];
    expected.forEach(file => {
      expect(fs.existsSync(path.join(ROOT, 'images', file))).toBe(true);
    });
  });
});

describe('Internal Navigation Links', () => {
  test('all anchor href targets (#id) exist as section ids', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      expect(target).not.toBeNull();
    });
  });
});

describe('External Links', () => {
  test('Google Play link uses HTTPS', () => {
    const playLink = document.querySelector('a[href*="play.google.com"]');
    expect(playLink).not.toBeNull();
    expect(playLink.getAttribute('href')).toMatch(/^https:\/\//);
  });

  test('Google Fonts link uses HTTPS', () => {
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    expect(fontLink).not.toBeNull();
    expect(fontLink.getAttribute('href')).toMatch(/^https:\/\//);
  });

  test('form action uses HTTPS', () => {
    const form = document.querySelector('form');
    expect(form.getAttribute('action')).toMatch(/^https:\/\//);
  });
});

describe('Footer Section', () => {
  test('has a footer element', () => {
    const footer = document.querySelector('footer');
    expect(footer).not.toBeNull();
  });

  test('footer contains "DogePow" branding', () => {
    const footer = document.querySelector('footer');
    expect(footer.textContent).toContain('DogePow');
  });

  test('footer contains the tagline', () => {
    const footer = document.querySelector('footer');
    expect(footer.textContent).toContain('Mine Today, Earn Tomorrow');
  });

  test('footer contains support email', () => {
    const footer = document.querySelector('footer');
    expect(footer.textContent).toContain('support@dogpow.xyz');
  });
});

describe('Accessibility Basics', () => {
  test('html element has lang attribute', () => {
    expect(document.documentElement.getAttribute('lang')).toBeTruthy();
  });

  test('page has exactly one h1 element', () => {
    const h1s = document.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
  });

  test('heading hierarchy: h1 appears before h2s', () => {
    const headings = document.querySelectorAll('h1, h2, h3');
    const tags = Array.from(headings).map(h => h.tagName);
    const firstH1 = tags.indexOf('H1');
    const firstH2 = tags.indexOf('H2');
    expect(firstH1).toBeLessThan(firstH2);
  });

  test('all form inputs have either a label or placeholder', () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      const hasPlaceholder = input.hasAttribute('placeholder');
      const id = input.getAttribute('id');
      const hasLabel = id ? document.querySelector(`label[for="${id}"]`) !== null : false;
      expect(hasPlaceholder || hasLabel).toBe(true);
    });
  });

  test('no empty links', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const text = link.textContent.trim();
      expect(text.length).toBeGreaterThan(0);
    });
  });

  test('page uses semantic HTML elements', () => {
    expect(document.querySelector('header')).not.toBeNull();
    expect(document.querySelector('nav')).not.toBeNull();
    expect(document.querySelector('footer')).not.toBeNull();
    expect(document.querySelectorAll('section').length).toBeGreaterThanOrEqual(4);
  });
});
