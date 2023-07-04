import axios from 'axios';
import queryString from 'query-string';
import { EndUserInterface, EndUserGetQueryInterface } from 'interfaces/end-user';
import { GetQueryInterface } from '../../interfaces';

export const getEndUsers = async (query?: EndUserGetQueryInterface) => {
  const response = await axios.get(`/api/end-users${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEndUser = async (endUser: EndUserInterface) => {
  const response = await axios.post('/api/end-users', endUser);
  return response.data;
};

export const updateEndUserById = async (id: string, endUser: EndUserInterface) => {
  const response = await axios.put(`/api/end-users/${id}`, endUser);
  return response.data;
};

export const getEndUserById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/end-users/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEndUserById = async (id: string) => {
  const response = await axios.delete(`/api/end-users/${id}`);
  return response.data;
};
