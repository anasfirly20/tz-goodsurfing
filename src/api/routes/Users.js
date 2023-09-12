import api from "../api";

export const getAllUsers = async () => {
  const res = await api.get(`/users`);
  return res.data;
};

export const postUser = async (body) => {
  const res = await api.post(`/users`, body);
  return res.data;
};

export const deleteUser = async (userId) => {
  const res = await api.delete(`/users/${userId}`);
  return res.data;
};
