import { PropsWithChildren } from 'react';
import useNativeMenu from 'renderer/hooks/useNativeMenu';
import { useAppFeature } from './AppFeatureProvider';

export default function NativeMenuProvider({ children }: PropsWithChildren) {
  const { theme, enableDebug, setTheme, setEnableDebug } = useAppFeature();

  useNativeMenu(
    () => [
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            role: 'close',
          },
        ],
      },
      {
        label: 'Preference',
        submenu: [
          {
            label: 'Dark Mode',
            type: 'checkbox',
            checked: theme === 'dark',
            id: 'dark-mode',
            click: () => {
              setTheme('dark');
            },
          },
          {
            label: 'Light Mode',
            type: 'checkbox',
            checked: theme === 'light',
            id: 'light-mode',
            click: () => {
              setTheme('light');
            },
          },
          {
            type: 'separator',
          },
          {
            label: enableDebug ? 'Stop SQL Debugger' : 'Start SQL Debugger',
            id: 'enable-debug',
            click: () => {
              setEnableDebug(!enableDebug);
            },
          },
          {
            type: 'separator',
          },
          {
            label: 'Reload',
            role: 'reload',
          },
          {
            label: 'Developer Tool',
            role: 'toggleDevTools',
          },
        ],
      },
    ],
    [theme, enableDebug, setTheme, setEnableDebug]
  );

  return <>{children}</>;
}
