import { PokemonCard } from '../../game/store/card/pokemon-card';
import { Stage, CardType } from '../../game/store/card/card-types';

export class Bronzor extends PokemonCard {

  public stage: Stage = Stage.BASIC;

  public cardType: CardType = CardType.METAL;

  public hp: number = 50;

  public weakness: any = [{ type: CardType.FIRE }];

  public resistance: any = [{ type: CardType.PSYCHIC, value: -20 }];

  public retreat: number[] = [ CardType.COLORLESS ];

  public attacks: any = [{
    name: 'Tackle',
    cost: [ CardType.METAL ],
    damage: 10,
    text: ''
  }];

  public set: string = 'BW2';

  public name: string = 'Bronzor';

  public fullName: string = 'Bronzor PFO';

}
