import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

/**
 * Services for manage messages
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  /**
   * List of the messages
   */
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];


  /**
   * @ignore
   */
  constructor() { }

  /**
   * Get all the messages
   * @example
   * You have called the getMessages () method to obtain the list of messages
   * @returns Returns the list of messages
   */
  public getMessages(): Message[] {
    return this.messages;
  }

  /**
   * Get the message that corresponds to the id
   * @example
   * You only have to send a number that corresponds to an id and the related message will be returned,
   * getMessageById(1)
   * @param {number} id Id of message 
   * @returns Returns the message related to the id sent
   */
  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
