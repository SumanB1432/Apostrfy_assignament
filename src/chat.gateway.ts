/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { WebSocketServer } from "@nestjs/websockets/decorators";

@WebSocketGateway()
export class ChatGetWay{

    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message : string): void {
        this.server.emit('message', message)
        
      }


}