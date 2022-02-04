import { PokemonCard } from '../../game/store/card/pokemon-card';
import { Stage, CardType } from '../../game/store/card/card-types';

export class Litleo extends PokemonCard {

  public stage: Stage = Stage.BASIC;

  public cardType: CardType = CardType.FIRE;

  public hp: number = 70;

  public weakness: any = [{ type: CardType.WATER }];

  public retreat: number[] = [ CardType.COLORLESS, CardType.COLORLESS ];

  public attacks: any = [{
    name: 'Combustion',
    cost: [ CardType.FIRE, CardType.FIRE, CardType.COLORLESS ],
    damage: 60,
    text: ''
  }];

  public set: string = 'BW2';

  public name: string = 'Litleo';

  public fullName: string = 'Litleo FLF';

}
