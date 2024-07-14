// import _ from "lodash";

import "./assets/stylesheet/style.scss";
import logoImg from "./assets/img/Logo.png";
const DomLogoImg = document.querySelector(".logoImg");
DomLogoImg.src = logoImg;
import Traveller from "./assets/img/Traveller.png";
const DomImgMain = document.querySelector(".imgMain");
DomImgMain.src = Traveller;

import ImgItem from "./assets/img/satellite.png";
const DomImgItem = document.querySelectorAll(".image-item1");
// DomImgItem.src = ImgItem;
DomImgItem.forEach(img=> img.src=ImgItem)
