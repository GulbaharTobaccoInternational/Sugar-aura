import test from 'node:test';
import assert from 'node:assert/strict';
import { whatsappUrl, whatsappDisplay } from '../lib/booking.ts';

test('WhatsApp booking uses the official number with no preset message', () => {
  assert.equal(whatsappUrl, 'https://wa.me/971588807612');
  assert.equal(whatsappDisplay.replace(/\D/g, ''), new URL(whatsappUrl).pathname.slice(1));
});
