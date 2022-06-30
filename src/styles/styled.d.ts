import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      icon: string;
      span: string;
      strong: string;
      border: string;
      paragraph: string;
      commentBox: string;
      comment: string;
      textarea: string;

      background: string;
      text: string;
    }
  }
}