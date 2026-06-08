declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_SOCKET_SERVER_URL?: string;
  readonly NEXT_PUBLIC_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
