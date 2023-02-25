export type Rgba = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type Color = {
  id: string;
  rgba: Rgba;
};

export type Background = {
  transparent?: boolean;
  selectedColor: Color;
  swatches: Array<Color>;
};

export interface IStore {
  background: Background;
  updateBackground({ selectedColor, swatches }: Partial<Background>): void;
}
