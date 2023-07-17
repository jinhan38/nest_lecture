import {Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Patch, Post, Put} from '@nestjs/common';
import {CatsService} from "./cats.service";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    @HttpCode(200) // 크롬에서 동적 메소드 실행시켰을 때 status 304로 나온다. 캐시를 저장하기 때문이다.
    getAllCat() {
        // 일반적인 에러 처리
        // throw new HttpException('api is broken', 401);

        // 커스텀 에러 처리
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
            success: false,
        }, HttpStatus.FORBIDDEN);
        return 'get all cats';
    }

    @Get(':id')
    getOneCat() {
        return 'get one cat'
    }

    @Post()
    createCat() {
        return 'creat cat success'
    }

    @Put(':id')
    updateCat() {
        return 'update success';
    }

    @Patch(':id')
    patchCat() {
        return 'patch success';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete success';
    }
}

