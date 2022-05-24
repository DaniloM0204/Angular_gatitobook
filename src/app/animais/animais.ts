export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComment: boolean;
  like: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
