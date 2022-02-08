import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class MetalEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.METAL ];

  public set: string = 'ENERGY';

  public name: string = 'Metal Energy';

  public fullName: string = 'Metal Energy EVO';

}
