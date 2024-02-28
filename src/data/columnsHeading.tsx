import { SortableAlphaIcon, SortDescendIcon } from "@salt-ds/icons";

const size = 1.7;

export const columnsHeading: { id: string; text: string; icon: JSX.Element }[] =
  [
    {
      id: "ticker",
      text: "Ticker",
      icon: <SortableAlphaIcon size={size} />,
    },
    {
      id: "assetClass",
      text: "Asset Class",
      icon: <SortDescendIcon size={size} />,
    },
    {
      id: "price",
      text: "Price",
      icon: <SortDescendIcon size={size} />,
    },
  ];
