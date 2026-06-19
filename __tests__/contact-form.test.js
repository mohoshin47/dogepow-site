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

describe('Contact Section', () => {
  let section;

  beforeAll(() => {
    section = document.querySelector('section#contact');
  });

  test('has a contact section with id "contact"', () => {
    expect(section).not.toBeNull();
  });

  test('has heading "Contact Us"', () => {
    const h2 = section.querySelector('h2');
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe('Contact Us');
  });
});

describe('Contact Form', () => {
  let form;

  beforeAll(() => {
    form = document.querySelector('section#contact form');
  });

  test('has a form element', () => {
    expect(form).not.toBeNull();
  });

  test('form uses POST method', () => {
    expect(form.getAttribute('method')).toBe('POST');
  });

  test('form action points to formsubmit.co', () => {
    const action = form.getAttribute('action');
    expect(action).toContain('formsubmit.co');
  });

  test('has a name input field', () => {
    const nameInput = form.querySelector('input[name="name"]');
    expect(nameInput).not.toBeNull();
    expect(nameInput.getAttribute('type')).toBe('text');
    expect(nameInput.getAttribute('placeholder')).toBe('Your Name');
    expect(nameInput.hasAttribute('required')).toBe(true);
  });

  test('has an email input field', () => {
    const emailInput = form.querySelector('input[name="email"]');
    expect(emailInput).not.toBeNull();
    expect(emailInput.getAttribute('type')).toBe('email');
    expect(emailInput.getAttribute('placeholder')).toBe('Your Email');
    expect(emailInput.hasAttribute('required')).toBe(true);
  });

  test('has a message textarea', () => {
    const textarea = form.querySelector('textarea[name="message"]');
    expect(textarea).not.toBeNull();
    expect(textarea.getAttribute('placeholder')).toBe('Message');
  });

  test('has a submit button', () => {
    const button = form.querySelector('button[type="submit"]');
    expect(button).not.toBeNull();
    expect(button.textContent.trim()).toBe('Send Message');
  });

  test('form has exactly 2 input fields and 1 textarea', () => {
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');
    expect(inputs.length).toBe(2);
    expect(textareas.length).toBe(1);
  });
});
