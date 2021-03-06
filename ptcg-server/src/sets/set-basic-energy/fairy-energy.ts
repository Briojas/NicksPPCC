import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class FairyEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.FAIRY ];

  public set: string = 'ENERGY';

  public name: string = 'Fairy Energy';

  public fullName: string = 'Fairy Energy EVO';

}
