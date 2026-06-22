import { APP_THEME } from './theme.constants';

export type AppTheme = (typeof APP_THEME)[keyof typeof APP_THEME];
