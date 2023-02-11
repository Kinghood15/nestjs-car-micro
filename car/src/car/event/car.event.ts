export class FindOneEvent {
  constructor(public readonly id: string) {}

  toString() {
    return JSON.stringify({
      orderId: this.id,
    });
  }
}
