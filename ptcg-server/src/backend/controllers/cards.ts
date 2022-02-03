import { Request, Response } from 'express';
import { CardManager } from '../../game';
import { Controller, Get } from './controller';

export class Cards extends Controller {

  @Get('/all')
  public async onAll(req: Request, res: Response): Promise<void> {
    const cardManager = CardManager.getInstance();
    const cards = cardManager.getAllCards();
    res.send({ok: true, cards});
  }

}
