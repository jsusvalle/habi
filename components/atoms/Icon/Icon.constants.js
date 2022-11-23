import { IconSearch } from "public/assets/icons";

import theme from "styles/theme";

export const IconsOptions = {
  search: ({ size, color }) => (
    <IconSearch
      color={color}
      height={theme.iconSize[size]}
      width={theme.iconSize[size]}
    />
  ),
};

export const options = {
  colors: ["white", "blue", "gray", "grayDark", "grayLight", "grayMedium"],
  icons: ["search"],
  size: ["small", "medium", "large"],
};
