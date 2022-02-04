import { CardList } from './card-list';
import { CardTarget, PlayerType, SlotType } from '../actions/play-card-action';
import { PokemonCard } from '../card/pokemon-card';
import { PokemonCardList } from './pokemon-card-list';
import { Marker } from './card-marker';

export class Player {

  public id: number = 0;

  public name: string = '';

  public deck: CardList = new CardList();

  public hand: CardList = new CardList();

  public discard: CardList = new CardList();

  public stadium: CardList = new CardList();

  public supporter: CardList = new CardList();

  public active: PokemonCardList = new PokemonCardList();

  public bench: PokemonCardList[] = [];

  public prizes: CardList[] = [];

  public retreatedTurn: number = 0;

  public energyPlayedTurn: number = 0;
  
  public stadiumPlayedTurn: number = 0;

  public stadiumUsedTurn: number = 0;

  public marker: Marker = new Marker();

  public avatarName: string = '';

  public getPrizeLeft(): number {
    return this.prizes.reduce((left, p) => left + p.cards.length, 0);
  }

  public forEachPokemon(
    player: PlayerType,
    handler: (cardList: PokemonCardList, pokemonCard: PokemonCard, target: CardTarget) => void
  ): void {
    let pokemonCard = this.active.getPokemonCard();
    let target: CardTarget;

    if (pokemonCard !== undefined) {
      target = { player, slot: SlotType.ACTIVE, index: 0 };
      handler(this.active, pokemonCard, target);
    }

    for (let i = 0; i < this.bench.length; i++) {
      pokemonCard = this.bench[i].getPokemonCard();
      if (pokemonCard !== undefined) {
        target = { player, slot: SlotType.BENCH, index: i };
        handler(this.bench[i], pokemonCard, target);
      }
    }
  }

  public switchPokemon(target: PokemonCardList): void {
    const benchIndex = this.bench.indexOf(target);
    if (benchIndex !== -1) {
      this.active.clearEffects();
      const temp = this.active;
      this.active = this.bench[benchIndex];
      this.bench[benchIndex] = temp;
    }
  }

}
