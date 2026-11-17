import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WHATSAPP_NUMBER, BOOKING_SERVICES, EMIRATES, serviceFromPath, createBookingMessage, createWhatsAppUrl } from '../lib/booking.ts';

const defaultMessage = "Hello Sugar & Aura! ✨\n\nI'd love to arrange a home beauty appointment.\n\nCould you please share your available services, appointment timings, and booking details?\n\nThank you!";
test('default message matches the approved copy and official number', () => {
  assert.equal(WHATSAPP_NUMBER, '971505071965');
  assert.equal(createBookingMessage(), defaultMessage);
  assert.equal(createWhatsAppUrl(), `https://wa.me/971505071965?text=${encodeURIComponent(defaultMessage)}`);
});
for (const [service, label] of Object.entries(BOOKING_SERVICES)) {
  test(`service message: ${label}`, () => {
    const message = createBookingMessage({ service });
    assert.ok(message.includes(`a ${label} appointment at home.`));
    assert.ok(message.includes('available appointment timings and booking details?'));
    assert.equal(new URL(createWhatsAppUrl({ service })).searchParams.get('text'), message);
  });
}
for (const emirate of EMIRATES) {
  test(`location message: ${emirate}`, () => {
    const message = createBookingMessage({ emirate });
    assert.ok(message.includes(`a home beauty appointment in ${emirate}.`));
    assert.ok(message.includes('available services and appointment timings?'));
    assert.equal(new URL(createWhatsAppUrl({ emirate })).searchParams.get('text'), message);
  });
  for (const [service, label] of Object.entries(BOOKING_SERVICES)) {
    test(`combined message: ${label}, ${emirate}`, () => {
      const url = new URL(createWhatsAppUrl({ service, emirate }));
      assert.equal(url.origin, 'https://wa.me');
      assert.equal(url.pathname, '/971505071965');
      assert.ok(url.searchParams.get('text').includes(`a ${label} appointment at home in ${emirate}.`));
      assert.equal(url.searchParams.get('text'), createBookingMessage({ service, emirate }));
      assert.equal([...url.searchParams].length, 1); // Ampersands and emoji cannot break encoding.
    });
  }
}
test('only real detail routes infer a service, including trailing slashes', () => {
  for (const service of Object.keys(BOOKING_SERVICES)) {
    assert.equal(serviceFromPath(`/services/${service}`), service);
    assert.equal(serviceFromPath(`/services/${service}/`), service);
  }
  for (const route of ['/', '/services', '/areas', '/services/unknown', '/journal/hair-styling', '/services/hair-styling/extra']) assert.equal(serviceFromPath(route), undefined);
});
