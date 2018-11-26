import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Bookmark } from './interfaces/bookmark.interface';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Injectable()
export class BookmarkService {
    constructor(@InjectModel('Bookmark') private readonly bookmarkModel: Model<Bookmark>) {}

    async create(createBookmarkDto: CreateBookmarkDto): Promise<Bookmark> {
        const createdCat = new this.bookmarkModel(createBookmarkDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Bookmark[]> {
        return await this.bookmarkModel.find().exec();
    }

    async findByQuery(filter: object): Promise<Bookmark> {
        return this.bookmarkModel.find(filter).exec();
    }

    async findById(bookmarkId: string): Promise<Bookmark> {
        return this.bookmarkModel.findById(this.toObjectId(bookmarkId)).exec();
    }

    async update(bookmarkId: string, updateBookmarkDto: UpdateBookmarkDto): Promise<Bookmark> {
        return await this.bookmarkModel.findByIdAndUpdate(this.toObjectId(bookmarkId), updateBookmarkDto, {new: true}).exec();
    }

    async delete(bookmarkId: string): Promise<Bookmark> {
        return this.bookmarkModel.findByIdAndRemove(this.toObjectId(bookmarkId)).exec();
    }

    private toObjectId(id: string): Types.ObjectId {
        return Types.ObjectId(id);
    }
}