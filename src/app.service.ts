import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getStatus(): object {
        return {
            status: 'OK',
        }
    }
}
