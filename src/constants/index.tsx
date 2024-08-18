import {
  AstroLogo,
  BigCardImageA,
  BigCardImageB,
  BigCardImageC,
  BigCardImageD,
  CoinbaseLogo,
  EclipseLogo,
  IGLogo,
  LinkedInLogo,
  NanoLogo,
  TrendingImageA,
  TrendingImageB,
  TrendingImageC,
  TrendingImageD,
  TrendingImageE,
  TrendingImageF,
  TrendingImageG,
  TrendingImageH,
  XLogo,
} from "@/assets";
import { link } from "fs";

export const navLinks = [
  { id: "nav-link1", title: "Trade", link: "/" },
  { id: "nav-link2", title: "Explore", link: "/" },
  { id: "nav-link3", title: "Stats", link: "/" },
  { id: "nav-link4", title: "Marketplace", link: "/" },
  { id: "nav-link5", title: "Create", link: "/" },
];

export const sponsors = [
  { id: "sponsor1", logo: CoinbaseLogo, name: "coinbase" },
  { id: "sponsor2", logo: AstroLogo, name: "astro" },
  { id: "sponsor3", logo: EclipseLogo, name: "eclipse" },
  { id: "sponsor4", logo: NanoLogo, name: "nano" },
  { id: "sponsor1", logo: CoinbaseLogo, name: "coinbase" },
  { id: "sponsor2", logo: AstroLogo, name: "astro" },
  { id: "sponsor3", logo: EclipseLogo, name: "eclipse" },
  { id: "sponsor4", logo: NanoLogo, name: "nano" },
  { id: "sponsor1", logo: CoinbaseLogo, name: "coinbase" },
];

export const trending = [
  { id: 4911, image: TrendingImageA, bigImg: BigCardImageA, name: "Princess", price: 12.239 },
  { id: 4912, image: TrendingImageB, bigImg: BigCardImageB, name: "Femo", price: 12.239 },
  { id: 4913, image: TrendingImageC, bigImg: BigCardImageC, name: "Mdolz", price: 12.239 },
  { id: 4914, image: TrendingImageD, bigImg: BigCardImageD, name: "Freezy", price: 12.239 },
  { id: 4915, image: TrendingImageE, bigImg: BigCardImageA, name: "Romb", price: 12.239 },
  { id: 4916, image: TrendingImageF, bigImg: BigCardImageA, name: "Fishy", price: 12.239 },
  { id: 4917, image: TrendingImageG, bigImg: BigCardImageA, name: "Natty eth", price: 12.239 },
  { id: 4918, image: TrendingImageH, bigImg: BigCardImageA, name: "Bat Guy", price: 12.239 },
];

export const socials = [
  { id: "social1", icon: XLogo, link: "" },
  { id: "social2", icon: IGLogo, link: "" },
  { id: "social3", icon: LinkedInLogo, link: "" },
];
