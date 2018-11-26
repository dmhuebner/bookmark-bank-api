import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkSchema } from './schemas/bookmark.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Bookmark', schema: BookmarkSchema}])],
    controllers: [BookmarkController],
    providers: [BookmarkService]
})
export class BookmarkModule {}
