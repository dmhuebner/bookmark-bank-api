import { Controller, Get, Post, Body, Put, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private readonly bookmarkService: BookmarkService) {}

    @Post()
    create(@Body() createBookmarkDto) {
        return this.bookmarkService.create(createBookmarkDto);
    }

    @Get()
    findByQuery(@Query() query) {
        return this.bookmarkService.findByQuery(query);
    }

    @Get(':id')
    async findById(@Param('id') id) {
        const response = await this.bookmarkService.findById(id);
        if (!response) {
            throw new HttpException('Bad Request: invalid id', HttpStatus.BAD_REQUEST);
        } else {
            return response;
        }
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateBookmarkDto) {
        return this.bookmarkService.update(id, updateBookmarkDto);
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.bookmarkService.delete(id);
    }
}
