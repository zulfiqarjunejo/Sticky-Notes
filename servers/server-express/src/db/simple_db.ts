'use strict';

import Note from '../notes/note';
import { v4 as uuidv4 } from 'uuid';

class SimpleDB {
  _map: Map<string, Note>;

  constructor() {
    this._map = new Map();
    this._map.set('id_1', new Note(uuidv4(), 'Note 1', 'Nothing Special'));
    this._map.set('id_2', new Note(uuidv4(), 'Note 2', 'Something'));
  }
}

export default new SimpleDB();
