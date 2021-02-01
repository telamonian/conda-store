import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { MainAreaWidget } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
  export const create = 'create-conda-store-widget';
}

/**
 * Initialization data for the react-widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'conda-store-widget',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    const { commands } = app;

    const command = CommandIDs.create;
    commands.addCommand(command, {
      caption: 'Launch a conda-store viewer.',
      label: 'Conda Store Widget',
      icon: args => (args['isPalette'] ? null : reactIcon),
      execute: () => {
        const widget = new MainAreaWidget();
        widget.title.label = 'Conds Store';
        app.shell.add(widget, 'main');
      }
    });

    if (launcher) {
      launcher.add({
        command
      });
    }
  }
};

export default extension;
