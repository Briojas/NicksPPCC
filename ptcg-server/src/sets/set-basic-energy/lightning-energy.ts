import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class LightningEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.LIGHTNING ];

  public set: string = 'ENERGY';

  public name: string = 'Lightning Energy';

  public fullName: string = 'Lightning Energy EVO';

}
