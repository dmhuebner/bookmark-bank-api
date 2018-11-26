import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkController } from './bookmark/bookmark.controller';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [BookmarkModule],
  controllers: [AppController, BookmarkController],
  providers: [AppService],
})
export class AppModule {}
