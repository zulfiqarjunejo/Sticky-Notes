'use strict';

import express from 'express';
import simpleDB from '../db/simple_db';
import Note from './note';

const service = (req: express.Request, res: express.Response) => {
  const notes: Note[] = [];

  simpleDB._map.forEach((value: Note) => {
    notes.push(value);
  });

  res.send({ notes: notes });
};

export default service;
