import { Injectable } from '@nestjs/common';
const { name, version } = require('../package.json');

@Injectable()
export class AppService {
  root(): string {
    return `${name} v${version} is up and running.`;
  }
}
