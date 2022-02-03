import { Rules } from '../store/state/rules';

export class GameSettings {

  public rules: Rules = new Rules();

  public timeLimit: number = 1800;

  public recordingEnabled: boolean = true;

}
