import { Card } from '../card/card';

interface MarkerItem {
  source: Card;
  name: string;
}

export class Marker {

  public markers: MarkerItem[] = [];

  public hasMarker(name: string, source?: Card): any {
    if (source === undefined) {
      return this.markers.some(c => c.name === name);
    }
    return this.markers.some(c => c.source === source && c.name === name);
  }

  public removeMarker(name: string, source?: Card): void {
    if (!this.hasMarker(name, source)) {
      return;
    }
    if (source === undefined) {
      this.markers = this.markers.filter(c => c.name !== name);
      return;
    }
    this.markers = this.markers.filter(c => c.source !== source || c.name !== name);
  }

  public addMarker(name: string, source: Card): void {
    if (this.hasMarker(name, source)) {
      return;
    }
    this.markers.push({ name, source });
  }
}
