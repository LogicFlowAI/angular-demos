import {FactoryProvider} from '@angular/core';

export abstract class MessageCollector {
  readonly messages: string[] = [];
  abstract addMessage(from: string, message: string): void;
}

export const messageCollectorProvider: FactoryProvider = {
  provide: MessageCollector,
  useFactory: (i: any) => i.get('messageCollector'),
  deps: ['$injector']
};
