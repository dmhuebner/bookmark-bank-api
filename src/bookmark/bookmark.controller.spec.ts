import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkController } from './bookmark.controller';

describe('Bookmark Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BookmarkController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BookmarkController = module.get<BookmarkController>(BookmarkController);
    expect(controller).toBeDefined();
  });
});
