import { GameInfo } from '../interfaces';

export class SocketCache {
  public gameInfoCache: {[id: number]: GameInfo} = {};
  public lastLogIdCache: {[id: number]: number} = {};
}
