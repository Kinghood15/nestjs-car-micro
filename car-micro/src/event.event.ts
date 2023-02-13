export class FindOneEvent {
  constructor(
    public readonly id: string,
  ) {}
}

export class FindOneAndSendEvent{
  constructor(
    public readonly id:string,
    public readonly name:string,
  ){}
}