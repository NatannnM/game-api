import { Controller, Get } from "@nestjs/common";
import { PlatformService } from "./platform.service";

@Controller('platform')
export class PlatformController{

    constructor(private platformServices: PlatformService){}

    @Get()
    findAll(){
        return 'GET';
    }
}