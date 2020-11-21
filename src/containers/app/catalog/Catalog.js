import React, { useState } from "react";
import {
  ViewComponent,
  AutoCompleteStyled,
  MenuStyled,
  MenuItemStyled,
} from "./Catalog.styled";
import { Menu } from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { data as sourcedate } from "../Home/catalogs/Source";
import ContainerItem from "./container/ContainerItem";
// import { handleClick, resetDefault, handleInput } from "./Utils";

let data = sourcedate;

const options = [
  { value: "Mersedess" },
  { value: "Porshe" },
  { value: "200" },
  { value: "100" },
  { value: "metal" },
  { value: "plastic" },
];

const { SubMenu } = Menu;

const drop = (
  <Menu.ItemGroup title="Filter by Price">
    <Menu.Item key="priceMore100">Price over 100</Menu.Item>
    <Menu.Item key="priceLess100">Price lower 100</Menu.Item>
    <Menu.Item key="priceMore500">Price over 500</Menu.Item>
    <Menu.Item key="priceMore200">Price over 200</Menu.Item>
  </Menu.ItemGroup>
);

let constsortType = "default";
let constfilterPrice = "all";
let constfilterMaterial = "all";
let constfilterDoor = "all";

const Catalog = () => {
  const [currentView, setCurrentView] = useState("image");
  const [sortType, setSortType] = useState("default");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterMaterial, setFilterMaterial] = useState("all");
  const [filterDoor, setFilterDoor] = useState("all");
  const [toys, setToys] = useState([...data]);

  const comparator = (a, b, standard) => {
    switch (standard) {
      case "highPrice":
        if (a.priceInUAH > b.priceInUAH) return -1;
        else if (a.priceInUAH < b.priceInUAH) return 1;
        else return 0;
      case "alphabet":
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
      case "lowPrice":
        if (a.priceInUAH > b.priceInUAH) return 1;
        else if (a.priceInUAH < b.priceInUAH) return -1;
        else return 0;
      case "material":
        if (a.material > b.material) return 1;
        else if (a.material < b.material) return -1;
        else return 0;
    }
  };

  const sortBy = (inputList) => {
    let standard = constsortType;
    if (standard === "default") {
      return [...data];
    }
    let result = inputList.sort((a, b) => comparator(a, b, standard));
    return result;
  };

  const filterByPrice = (inputList) => {
    if (constfilterPrice === "all") {
      return inputList;
    }
    let result = [];

    switch (constfilterPrice) {
      case "priceLess100":
        result = inputList.filter((a) => a.priceInUAH < 100);
        break;
      case "priceMore100":
        result = inputList.filter((a) => a.priceInUAH >= 100);
        break;
      case "priceMore200":
        result = inputList.filter((a) => a.priceInUAH > 200);
        break;
      case "priceMore500":
        result = inputList.filter((a) => a.priceInUAH > 500);
        break;
    }
    console.log("filter price", result);
    return result;
  };

  const filterByDoor = (inputList) => {
    if (constfilterDoor === "all") {
      return inputList;
    }
    if (constfilterDoor === "doorsMore") {
      let result = inputList.filter(
        (a) => a.doorCount != "2" && a.doorCount != "4"
      );
      return result;
    }

    let result = inputList.filter(
      (a) => a.doorCount == constfilterDoor.substr(5)
    );

    return result;
  };

  const filterByMaterial = (inputList) => {
    if (constfilterMaterial === "all") {
      return inputList;
    }
    let result = [];
    if (constfilterMaterial === "materialOthers") {
      result = inputList.filter(
        (a) =>
          a.material !== "metal" &&
          a.material !== "plastic" &&
          a.material !== "carbon"
      );
    } else {
      result = inputList.filter(
        (a) => a.material === constfilterMaterial.toLowerCase().substr(8)
      );
    }
    return result;
  };

  const diFilters = () => {
    let inputList = [...data];
    inputList = sortBy(inputList);
    console.log("start show", inputList);
    inputList = filterByMaterial(inputList);
    console.log("test1", inputList);
    inputList = filterByDoor(inputList);
    console.log("test2", inputList);
    inputList = filterByPrice(inputList);
    setToys(inputList);
    console.log("end show", inputList);
  };

  const handleInput = (e) => {
    console.log("click", e);

    let sample = e;
    let resultList = [];
    sourcedate.forEach((item) => {
      switch (true) {
        case item.priceInUAH.toString().includes(sample):
          resultList.push(item);
          break;
        case item.ageGroup.toString().includes(sample):
          resultList.push(item);
          break;
        case item.color.includes(sample):
          resultList.push(item);
          break;
        case item.size.includes(sample):
          resultList.push(item);
          break;
        case item.doorCount.toString().includes(sample):
          resultList.push(item);
          break;
        case item.lengthInMM.toString().includes(sample):
          resultList.push(item);
          break;
        case item.material.includes(sample):
          resultList.push(item);
          break;
        case item.title.includes(sample):
          resultList.push(item);
          break;
      }
    });
    data = resultList;
    if (sample == "") {
      data = sourcedate;
    }
    console.log(data);
    diFilters();
  };

  const handleClick = (e) => {
    console.log("click ", e);

    switch (e.item.props.subMenuKey) {
      case "view-menu-":
        if (e.key === "image") {
          setCurrentView("image");
        } else {
          setCurrentView("card");
        }
        break;
      case "sort-menu-":
        setSortType(e.key);
        constsortType = e.key;
        break;
      case "filterPrice-menu-":
        setFilterPrice(e.key);
        constfilterPrice = e.key;
        break;
      case "filterMaterial-menu-":
        setFilterMaterial(e.key);
        constfilterMaterial = e.key;
        break;
      case "filterDoor-menu-":
        setFilterDoor(e.key);
        constfilterDoor = e.key;
        break;
    }
    diFilters();
    console.log("click ", e);
  };

  const resetDefault = (e) => {
    console.log("click", e);
    switch (e.item.props.subMenuKey) {
      case "sort-menu-":
        setSortType("default");
        constsortType = "default";
        break;
      case "filterPrice-menu-":
        setFilterPrice("all");
        constfilterPrice = "all";
        break;
      case "filterMaterial-menu-":
        setFilterMaterial("all");
        constfilterMaterial = "all";
        break;
      case "filterDoor-menu-":
        setFilterDoor("all");
        constfilterDoor = "all";
        break;
    }
    diFilters();
  };

  return (
    <ViewComponent>
      <MenuStyled
        multiple
        onSelect={handleClick}
        onDeselect={resetDefault}
        selectedKeys={[
          currentView,
          sortType,
          filterPrice,
          filterDoor,
          filterMaterial,
        ]}
        mode="horizontal"
      >
        <SubMenu key="view" title="Choose View form" icon={<IdcardOutlined />}>
          <Menu.Item key="image">Image View</Menu.Item>
          <Menu.Item key="card">Card View</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sort"
          title="Choose View form"
          icon={<SortAscendingOutlined />}
        >
          <Menu.Item key="highPrice">Highest Price</Menu.Item>
          <Menu.Item key="alphabet">Alphabetical</Menu.Item>
          <Menu.Item key="lowPrice">Lower Price</Menu.Item>
          <Menu.Item key="material">By material</Menu.Item>
        </SubMenu>

        <SubMenu
          key="filter"
          title="Choose View form"
          icon={<FilterOutlined />}
        >
          {/* <Dropdown overlay={drop}>Dro Down</Dropdown> */}
          <SubMenu title="Filter by Price" key="filterPrice">
            <Menu.Item key="priceLess100">Price lower 100</Menu.Item>
            <Menu.Item key="priceMore100">Price over 100</Menu.Item>
            <Menu.Item key="priceMore200">Price over 200</Menu.Item>
            <Menu.Item key="priceMore500">Price over 500</Menu.Item>
          </SubMenu>
          <SubMenu title="Filter by Material" key="filterMaterial">
            <Menu.Item key="materialMetal">Metal</Menu.Item>
            <Menu.Item key="materialPlastic">Plastic</Menu.Item>
            <Menu.Item key="materialCarbon">Carbon</Menu.Item>
            <Menu.Item key="materialOthers">Others</Menu.Item>
          </SubMenu>
          <SubMenu title="Filter by Doors Number" key="filterDoor">
            <Menu.Item key="doors2">2 Door</Menu.Item>
            <Menu.Item key="doors4">4 Door</Menu.Item>
            <Menu.Item key="doorsMore">More</Menu.Item>
          </SubMenu>
        </SubMenu>
        <MenuItemStyled key="search">
          <AutoCompleteStyled
            style={{ width: 200 }}
            options={options}
            placeholder="type to find"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onChange={handleInput}
          />
        </MenuItemStyled>
      </MenuStyled>
      <ContainerItem toys={toys} currentView={currentView} />
    </ViewComponent>
  );
};

export default Catalog;
