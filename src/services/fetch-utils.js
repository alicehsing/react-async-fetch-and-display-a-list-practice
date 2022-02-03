import React from 'react';
import { checkError, client } from './client';

export async function getCars() {
  const response = await client
    .from('cars')
    .select();

  return checkError(response);
}

export async function getTVShows() {
  const response = await client
    .from('Netflix TV Shows')
    .select();
  return checkError(response);
}
