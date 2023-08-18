<template/>
<script>
import { CodeXSurveys } from '@codexteam/surveys';

const databaseId = process.env.NOTION_DATABASE_ID;
const clientSecret = process.env.NOTION_CLIENT_SECRET;

const widget = new CodeXSurveys({
  notion: {
    databaseId: databaseId,
    clientSecret: clientSecret,
  },
  form: {
    description:
      'We want to better understand your goals and requirements. Please, provide us some insights.',
    items: [
      {
        label: 'Product type',
        field: {
          name: 'product_type',
          type: 'select',
          options: ['B2B', 'B2C'],
        },
      },
      {
        label: 'Your product size',
        field: {
          type: 'select',
          name: 'product_size',
          options: ['<100 DAU', '100 DAU - 1000 DAU', '> 1000 DAU'],
        },
      },
      {
        label: 'Your software license',
        field: {
          name: 'software_license',
          type: 'select',
          options: ['Freeware / Open-Source', 'Permissive', 'Proprietary'],
        },
      },
      {
        label: 'Your suggestions to the Editor.js',
        field: {
          name: 'suggestions',
          type: 'textarea',
          placeholder: 'Enter your ideas, requests or issues',
        },
      },
    ],
  },
  widget: {
    title: 'Using Editor.js?',
    description: 'Take a 2-minutes survey🙏',
  },
});
</script>
