import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getLoadingImageUrl = (name) => {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
};

export const getSplashImageUrl = (name) => {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;
};

export const getChampionImageUrl = (name) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${name}.png`;
};

export const getChampionPassiveImageUrl = (full) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${full}`;
};

export const getChampionAbilityImageUrl = (ability) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/spell/${ability}`;
};

export const getItemImageUrl = (itemId) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/item/${itemId}.png`;
};

export const getProfileIconImageUrl = (iconId) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/profileicon/${iconId}.png`;
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
