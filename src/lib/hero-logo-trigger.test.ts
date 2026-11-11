import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { HeroLogoTrigger } from "./hero-logo-trigger";

describe("hero logo scroll trigger", () => {
  test("does not start before the initial CTA popup closes", () => {
    const trigger = new HeroLogoTrigger(0);
    assert.equal(trigger.scroll(100), false);
    trigger.setDismissed(true, 100);
    assert.equal(trigger.scroll(100), false);
  });

  test("starts on the first downward scroll after dismissal, not an upward scroll", () => {
    const trigger = new HeroLogoTrigger(100);
    trigger.setDismissed(true, 100);
    assert.equal(trigger.scroll(90), false);
    assert.equal(trigger.scroll(91), true);
  });

  test("does not repeat on later downward scrolls", () => {
    const trigger = new HeroLogoTrigger(0);
    trigger.setDismissed(true, 0);
    assert.equal(trigger.scroll(1), true);
    assert.equal(trigger.scroll(2), false);
  });

  test("waits while a dismissed popup is reopened", () => {
    const trigger = new HeroLogoTrigger(0);
    trigger.setDismissed(true, 0);
    trigger.setDismissed(false, 0);
    assert.equal(trigger.scroll(1), false);
    trigger.setDismissed(true, 1);
    assert.equal(trigger.scroll(2), true);
  });
});