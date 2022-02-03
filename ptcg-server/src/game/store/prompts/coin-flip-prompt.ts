import { Prompt } from './prompt';
import { GameMessage } from '../../game-message';

export class CoinFlipPrompt extends Prompt<boolean> {

  public readonly type: string = 'Coin flip';

  constructor(playerId: number, public message: GameMessage) {
    super(playerId);
  }

}
