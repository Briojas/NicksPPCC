export class Rules {

  public firstTurnDrawCard: boolean = true;

  public firstTurnUseSupporter: boolean = true;

  constructor(init: Partial<Rules> = {}) {
    Object.assign(this, init);
  }

}
