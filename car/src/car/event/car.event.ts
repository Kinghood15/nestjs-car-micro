export class FindOneEvent {
  constructor(public readonly id: string,public readonly name:string) {}

  toString() {
    return JSON.stringify({
      orderId: this.id,
      name:this.name,
    });
  }
}
