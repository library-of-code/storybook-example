import React from 'react';
import Task from './Task';

export default {
    component: Task,
    title: 'task',
};

const Template = args => <Task {...args} />

export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
      },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
    