import React, { useState } from "react";
import { data as sourcedate } from "../Home/catalogs/Source";
import ContainerItem from "./container/ContainerItem";
import { executeFilters } from "./Utils";
import { Menu } from "antd";
import {
  ViewComponent,
  AutoCompleteStyled,
  MenuStyled,
  MenuItemStyled,
} from "./Catalog.styled";
import {
  SortAscendingOutlined,
  FilterOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

let data = sourcedate;
const { SubMenu } = Menu;

const options = [
  { value: "Mersedess" },
  { value: "Porshe" },
  { value: "200" },
  { value: "100" },
  { value: "metal" },
  { value: "plastic" },
];

const filters = {
  sortType: "all",
  filterPrice: "all",
  filterMaterial: "all",
  filterDoor: "all",
};

const Catalog = () => {
  const [currentView, setCurrentView] = useState("image");
  const [sortType, setSortType] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterMaterial, setFilterMaterial] = useState("all");
  const [filterDoor, setFilterDoor] = useState("all");
  const [toys, setToys] = useState([...data]);

  const handleInput = (sample) => {
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
    setToys(executeFilters(filters, data));
  };

  const handleClick = (e) => {
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
        filters.sortType = e.key;
        break;
      case "filterPrice-menu-":
        setFilterPrice(e.key);
        filters.filterPrice = e.key;
        break;
      case "filterMaterial-menu-":
        setFilterMaterial(e.key);
        filters.filterMaterial = e.key;
        break;
      case "filterDoor-menu-":
        setFilterDoor(e.key);
        filters.filterDoor = e.key;
        break;
    }
    setToys(executeFilters(filters, data));
  };

  const resetDefault = (e) => {
    const props = {
      key: "all",
      item: { props: { subMenuKey: e.item.props.subMenuKey } },
    };
    handleClick(props);
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
