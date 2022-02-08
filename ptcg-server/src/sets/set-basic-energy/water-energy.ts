import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class WaterEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.WATER ];

  public set: string = 'ENERGY';

  public name: string = 'Water Energy';

  public fullName: string = 'Water Energy EVO';

}
