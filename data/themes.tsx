interface Theme {
  id: number;
  name: string;
  bgColor: string;
  linkBgColor: string;
  linkTextColor: string;
  linkBorderRadius: string;
  linkShadow: string;
}

export const themes: Theme[] = [
  {
    id: 1,
    name: "Ocean Breeze",
    bgColor: "#F0F8FF", // Alice Blue
    linkBgColor: "#3AA7FF", // Blue
    linkTextColor: "#FFFFFF", // White
    linkBorderRadius: "5px",
    linkShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  {
    id: 2,
    name: "Sunset Serenade",
    bgColor: "#FFF8E1", // Moccasin
    linkBgColor: "#FF6F61", // Red
    linkTextColor: "#FFFFFF", // White
    linkBorderRadius: "8px",
    linkShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
  },
  {
    id: 3,
    name: "Emerald Enchantment",
    bgColor: "#E8F5E9", // Mint Cream
    linkBgColor: "#00A86B", // Green
    linkTextColor: "#FFFFFF", // White
    linkBorderRadius: "3px",
    linkShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
  },
  {
    id: 4,
    name: "Golden Glow",
    bgColor: "#FFF8E1", // Moccasin
    linkBgColor: "#FFD700", // Gold
    linkTextColor: "#000000", // Black
    linkBorderRadius: "5px",
    linkShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
];
