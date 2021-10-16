import React from 'react';

import { Text } from './Text';

export default {
    title: 'Example/Text',
    component: Text
}

const Template = (args) => <Text {...args} />;

export const Heading = Template.bind({});
Heading.args = {
    size: 'heading',
    label: 'Heading',
    muted: false,
    bold: false
};

export const Subheading = Template.bind({});
Subheading.args = {
    size: 'subheading',
    label: 'Subheading',
    muted: false,
    bold: false
};

export const Title = Template.bind({});
Title.args = {
    size: 'title',
    label: 'Title',
    muted: false,
    bold: false
};

export const Subtitle = Template.bind({});
Subtitle.args = {
    size: 'subtitle',
    label: 'Subtitle',
    muted: false,
    bold: false
};

export const Body = Template.bind({});
Body.args = {
    size: 'body',
    label: 'Body',
    muted: false,
    bold: false
};

export const Description = Template.bind({});
Description.args = {
    size: 'description',
    label: 'Description',
    muted: false,
    bold: false
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Small',
    muted: false,
    bold: false
};

export const Xsmall = Template.bind({});
Xsmall.args = {
    size: 'xsmall',
    label: 'Xtra Small',
    muted: false,
    bold: false
};