import { CardType, EnergyType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class DoubleColorlessEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.COLORLESS, CardType.COLORLESS ];

  public energyType: number = EnergyType.SPECIAL;

  public set: string = 'ENERGY';

  public name: string = 'Double Colorless Energy';

  public fullName: string = 'Double Colorless Energy EVO';

}
