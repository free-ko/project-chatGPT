export type SerializedStyles = {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
};
