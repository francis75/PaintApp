import { Injectable } from '@angular/core';
    declare const Pusher: any;
    @Injectable()
    export class PusherService {
      constructor() {
        const pusher = new Pusher('56f705a6de2db5c8fb0d', {
          cluster: 'us2',
        });
        this.channel = pusher.subscribe('painting');
      }
      channel;
      public init() {
        return this.channel;
      }
    }