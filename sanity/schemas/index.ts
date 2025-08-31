import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'mission',
      type: 'document',
      title: 'Mission',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'text' }
      ]
    },
    {
      name: 'vision',
      type: 'document',
      title: 'Vision',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'text' }
      ]
    },
    {
      name: 'presidentWord',
      type: 'document',
      title: "President's Word",
      fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'text' }
      ]
    },
    {
      name: 'about',
      type: 'document',
      title: 'About',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'text' }
      ]
    },
    {
      name: 'lead',
      type: 'document',
      title: 'Lead',
      fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'interest', type: 'string' },
        { name: 'message', type: 'text' }
      ]
    }
  ]
};
