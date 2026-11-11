export const PROMPT_STATE_EVENT = "wintagen:prompt-state";

/** Track actual page movement, not wheel gestures inside the popup. */
export class HeroLogoTrigger {
  private dismissed = false;
  private started = false;
  private previousY: number;

  constructor(scrollY: number) {
    this.previousY = scrollY;
  }

  setDismissed(dismissed: boolean, scrollY: number) {
    this.dismissed = dismissed;
    this.previousY = scrollY;
  }

  scroll(scrollY: number) {
    const downward = scrollY > this.previousY;
    this.previousY = scrollY;
    if (this.started || !this.dismissed || !downward) return false;
    this.started = true;
    return true;
  }
}