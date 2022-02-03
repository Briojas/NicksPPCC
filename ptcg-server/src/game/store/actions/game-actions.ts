import { Action } from './action';
import { CardTarget } from './play-card-action';

export class AttackAction implements Action {

  readonly type: string = 'ATTACK_ACTION';

  constructor(
    public clientId: number,
    public name: string
  ) {}

}

export class UseAbilityAction implements Action {

  public readonly type: string = 'USE_ABILITY_ACTION';

  constructor(
    public clientId: number,
    public name: string,
    public target: CardTarget
  ) {}

}

export class UseStadiumAction implements Action {

  public readonly type: string = 'USE_STADIUM_ACTION';

  constructor(
    public clientId: number
  ) {}

}

export class RetreatAction implements Action {

  public readonly type: string = 'RETREAT_ACTION';

  constructor(
    public clientId: number,
    public benchIndex: number
  ) {}

}

export class PassTurnAction implements Action {

  public readonly type: string = 'PASS_TURN';

  constructor(public clientId: number) {}

}
