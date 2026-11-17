'use client';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type SyntheticEvent } from 'react';
import { useReducedMotion } from 'motion/react';

/** Native modal semantics and focus trap, with a short animated close before removal. */
export function useDialog(duration = 210) {
  const ref = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const open = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    lastFocus.current = document.activeElement as HTMLElement;
    setClosing(false);
    if (!ref.current?.open) ref.current?.showModal();
  }, []);
  const close = useCallback((immediate = false) => {
    if (!ref.current?.open) return;
    if (timer.current) clearTimeout(timer.current);
    if (immediate || reduce) { ref.current.close(); return; }
    setClosing(true);
    timer.current = setTimeout(() => ref.current?.close(), duration);
  }, [duration, reduce]);
  const onClose = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setClosing(false);
    if (lastFocus.current?.checkVisibility()) lastFocus.current.focus({ preventScroll: true });
    else document.querySelector<HTMLElement>('.menu-trigger')?.focus({ preventScroll: true });
  }, []);
  const onCancel = useCallback((event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault(); close();
  }, [close]);
  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(element => element.checkVisibility());
    const first = controls[0];
    const last = controls.at(-1);
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === event.currentTarget)) {
      event.preventDefault(); first.focus();
    }
  }, []);
  return { ref, open, close, onClose, onCancel, onKeyDown, closing };
}
