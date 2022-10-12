declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DB_HOST: string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
      IPHOST: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
