import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    return res.render('index', { message: 'Hello world!!' });
  }

  @Get('name')
  printName(@Res() res: Response) {
    return res.render('print', { message: 'Hello world!!' });
  }

  @Get('layout')
  anotherLayout(@Res() res: Response) {
    return res.render('print', {
      layout: 'layout_other',
      message: 'Hello world!!',
    });
  }

  @Get('array')
  getArray(@Res() res: Response) {
    const contentArray = [
      { message: 'first' },
      { message: 'second' },
      { message: 'third' },
    ];
    return res.render('array', { myArray: contentArray });
  }
}
