import React, { useState, useEffect, useContext } from "react";
import ContainerItem from "../../../../components/container/ContainerItem";
import { executeFilters, findBy, changeCatalogState } from "./Utils";
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
import ElementsContext from "../../utils/Context";
import LoadPrewiew from "../../../../components/loading/LoadPreview";
import { CatalogState, options } from "./Source";

const { SubMenu } = Menu;

const Catalog = () => {
  const { source } = useContext(ElementsContext);
  let data = source;
  const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
  const [toys, setToys] = useState([...data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setToys(source);
  }, [source]);

  const handleInput = (sample) => {
    data = findBy(sample, source);
    setToys(executeFilters(CatalogState, data));
  };

  const handleClick = (e) => {
    console.log(e);
    let CatalogState = changeCatalogState(e);
    setSelectedKeys(Object.values(CatalogState));
    setToys(executeFilters(CatalogState, data));
  };

  const resetDefault = (e) => {
    let props = {
      key: "default",
      item: { props: { subMenuKey: e.item.props.subMenuKey } },
    };
    if (e.item.props.subMenuKey === "view-menu-") {
      props.key = "card";
    }
    handleClick(props);
  };

  console.log(toys);
  return (
    <ViewComponent>
      <MenuStyled
        multiple
        onSelect={handleClick}
        onDeselect={resetDefault}
        selectedKeys={selectedKeys}
        mode="horizontal"
      >
        <SubMenu key="view" title="Choose View form" icon={<IdcardOutlined />}>
          <Menu.Item key="image">Image View</Menu.Item>
          <Menu.Item key="card">Card View</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sort"
          title="Choose Sorting Order"
          icon={<SortAscendingOutlined />}
        >
          <Menu.Item key="highPrice">Highest Price</Menu.Item>
          <Menu.Item key="alphabet">Alphabetical</Menu.Item>
          <Menu.Item key="lowPrice">Lower Price</Menu.Item>
          <Menu.Item key="material">By material</Menu.Item>
        </SubMenu>

        <SubMenu key="filter" title="Choose Filter" icon={<FilterOutlined />}>
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
          <SubMenu title="Filter by Size of car" key="filterSize">
            <Menu.Item key="sizeSmall">Small</Menu.Item>
            <Menu.Item key="sizeMedium">Medium</Menu.Item>
            <Menu.Item key="sizeLarge">Large</Menu.Item>
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
            onSearch={handleInput}
          />
        </MenuItemStyled>
      </MenuStyled>
      {toys.length !== 0 ? (
        <ContainerItem toys={toys} currentView={CatalogState.currentView} />
      ) : (
        <LoadPrewiew />
      )}
    </ViewComponent>
  );
};

export default Catalog;
