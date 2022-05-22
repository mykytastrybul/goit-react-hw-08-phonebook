import { createSelector } from '@reduxjs/toolkit';

export const getStateContacts = state => state.contacts.items;
export const getStateFilter = state => state.contacts.filter;

export const getFiltered = createSelector(
  [getStateContacts, getStateFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
