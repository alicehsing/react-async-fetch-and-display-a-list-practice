import React from 'react';
import { checkError, client } from './client';

export async function getCars() {
  const response = await client
    .from('cars')
    .select();

  return checkError(response);
}
