import styled from "styled-components";

export const SortingPanel = styled.ul`
  width: 700px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const SortingText = styled.li`
  font-family: "OpenSans Regular";
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => (props.color || props.active ? "#333" : "#6D6D6D")};
  list-style: none;
  cursor: pointer;
  :hover {
    color: #333;
    text-shadow: ${(props) => (props.color ? "none" : "#595959 4px 0 10px")};
  }
`;
