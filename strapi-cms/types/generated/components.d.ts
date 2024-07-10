import type { Schema, Attribute } from '@strapi/strapi';

export interface PropertiesProperties extends Schema.Component {
  collectionName: 'components_properties_properties';
  info: {
    displayName: 'properties';
    icon: '';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'properties.properties': PropertiesProperties;
    }
  }
}
