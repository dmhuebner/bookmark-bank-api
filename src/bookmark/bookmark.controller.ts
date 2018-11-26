import {Controller, Get, Post, Body, Put, Param, Delete, Query} from '@nestjs/common';

@Controller('bookmark')
export class BookmarkController {
    @Post()
    create(@Body() createCatDto) {
        return 'This action adds a new bookmark';
    }

    @Get()
    findAll(@Query() query) {
        return `This action returns all bookmarks (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} bookmark`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return `This action updates a #${id} bookmark`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `This action removes a #${id} bookmark`;
    }
}
