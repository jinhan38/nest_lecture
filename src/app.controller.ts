import {Body, Controller, Get, HttpCode, Param, Req} from '@nestjs/common';
import {AppService} from './app.service';
import {Request} from "express";

@Controller('cats')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('hello/:id/:name')
    @HttpCode(200)
    getHello(@Req() req: Request, @Body() body, @Param() param: { id: string; name: string }): string {
        console.log(body);
        console.log(param);
        console.log(param.id);
        console.log(param.name);
        return this.appService.getHello();
    }
}
