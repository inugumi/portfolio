import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('health')
    getHealth(): object {
        return this.appService.getStatus()
    }

    @Get('status')
    getStatus(): object {
        return this.appService.getStatus()
    }
}
