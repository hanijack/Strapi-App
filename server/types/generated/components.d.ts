import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    action: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    action: Schema.Attribute.Component<'elements.link', false>;
    color: Schema.Attribute.Enumeration<['blue', 'orange']>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.RichText;
  };
}

export interface ElementsConclusion extends Struct.ComponentSchema {
  collectionName: 'components_elements_conclusions';
  info: {
    displayName: 'conclusion';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    description: '';
    displayName: 'feature';
  };
  attributes: {
    feature_title: Schema.Attribute.String;
    name: Schema.Attribute.Component<'elements.feature-name', true>;
  };
}

export interface ElementsFeatureName extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_names';
  info: {
    description: '';
    displayName: 'feature-name';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ElementsInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_infos';
  info: {
    description: '';
    displayName: 'info';
  };
  attributes: {
    Construction_Name: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    Project_Name: Schema.Attribute.String;
    Service: Schema.Attribute.String;
  };
}

export interface ElementsKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_elements_key_features';
  info: {
    description: '';
    displayName: 'key_features';
  };
  attributes: {
    feature: Schema.Attribute.Component<'elements.feature', true>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsProjectGoals extends Struct.ComponentSchema {
  collectionName: 'components_elements_project_goals';
  info: {
    description: '';
    displayName: 'project_goals';
  };
  attributes: {
    goal: Schema.Attribute.RichText;
  };
}

export interface ElementsProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_elements_project_overviews';
  info: {
    description: '';
    displayName: 'project_overview';
  };
  attributes: {
    Consultant: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    Project_Name: Schema.Attribute.String;
    Project_Type: Schema.Attribute.String;
  };
}

export interface ElementsSlice extends Struct.ComponentSchema {
  collectionName: 'components_elements_slices';
  info: {
    description: '';
    displayName: 'slice';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'blocks.info': BlocksInfo;
      'elements.conclusion': ElementsConclusion;
      'elements.feature': ElementsFeature;
      'elements.feature-name': ElementsFeatureName;
      'elements.info': ElementsInfo;
      'elements.key-features': ElementsKeyFeatures;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.project-goals': ElementsProjectGoals;
      'elements.project-overview': ElementsProjectOverview;
      'elements.slice': ElementsSlice;
    }
  }
}
