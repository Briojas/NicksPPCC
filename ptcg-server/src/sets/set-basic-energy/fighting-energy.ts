import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class FightingEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.FIGHTING ];

  public set: string = 'ENERGY';

  public name: string = 'Fighting Energy';

  public fullName: string = 'Fighting Energy EVO';

}
