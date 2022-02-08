import { CardType } from '../../game/store/card/card-types';
import { EnergyCard } from '../../game/store/card/energy-card';

export class PsychicEnergy extends EnergyCard {

  public provides: CardType[] = [ CardType.PSYCHIC ];

  public set: string = 'ENERGY';

  public name: string = 'Psychic Energy';

  public fullName: string = 'Psychic Energy EVO';

}
