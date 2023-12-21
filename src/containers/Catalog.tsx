import React from "react";
import styled from "styled-components";
import Item from "../components/Item";
import withDataFetching from "../withDataFetching";
import manifest from "../manifest.json";
import Navbar from "../components/Navbar";
import * as JSURL from "jsurl";
import { Container } from "../App";
import Pagination from "../components/Pagination";
import Options from "../components/Options";

interface CatalogProps {
  error: string;
  loading: boolean;
  data: {
    page: number;
    next: boolean;
    limit: number;
    amount: number;
    items: { id: string; name: string; cost: number; imgUrls: string[] }[];
  };
  fetch: (url: string) => void;
}

interface CatalogState {
  error: string;
  loading: boolean;
  page: number;
  next: boolean;
  limit: number;
  amount: number;
  filters: any;
  data: { id: string; name: string; cost: number; imgUrls: string[] }[];
}

class CatalogContainer extends React.Component<CatalogProps, CatalogState> {
  constructor(props: CatalogProps) {
    super(props);

    this.state = {
      error: props.error,
      loading: props.loading,
      data: [],
      page: 0,
      next: false,
      limit: 0,
      amount: 0,
      filters: {},
    };
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.data !== this.props.data) {
      const { items, page, amount, limit, next } = this.props.data;
      const { loading, error } = this.props;
      this.setState({
        loading,
        error,
        data: items,
        page,
        amount,
        limit,
        next,
      });
    }
  }
//make service
  onFiltersChanged = async (filters: any) => {
    this.setState({ ...this.state, filters });
    await this.props.fetch(
      `${manifest.api_url}item?filters=${JSURL.stringify(filters)}&page=${
        this.state.page
      }&limit=${this.state.limit}`
    );
  };

  onPaginationChanged = async (page: number) => {
    this.setState({ ...this.state, page });

    await this.props.fetch(
      `${manifest.api_url}item?filters=${JSURL.stringify(
        this.state.filters
      )}&page=${page}&limit=${this.state.limit}`
    );
  };

  onOptionsChanged = async (limit: number) => {
    this.setState({ ...this.state, limit, page: 0 });

    await this.props.fetch(
      `${manifest.api_url}item?filters=${JSURL.stringify(
        this.state.filters
      )}&page=${0}&limit=${limit}`
    );
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading || error) {
      return <Container>{loading ? "Loading..." : error}</Container>;
    }

    return (
      <Container>
        <ContainerWrap>
          <FilterWrap>
            <Navbar
              onChange={this.onFiltersChanged}
              pattern={{
                type: [
                  {
                    id: "91dfa8a2-2eed-4zd9-af5f-8b7ff9be5b07",
                    name: "snack",
                  },
                ],
              }}
            ></Navbar>
          </FilterWrap>
          <CatalogWrap>
            <SettingsWrap>
              <p>Products</p>
              <Options onChange={this.onOptionsChanged}></Options>
            </SettingsWrap>
            <CardsWrap>
              {data?.map((i) => (
                <Item
                  key={i.id}
                  imgUrl={`${manifest.static_url}${i.imgUrls[0]}`}
                  name={i.name}
                  sale={0}
                  price={i.cost}
                  rating={5}
                  currency={"$"}
                ></Item>
              ))}
            </CardsWrap>
            <PaginationWrap>
              <Pagination
                amount={this.state.amount}
                limit={this.state.limit}
                next={this.state.next}
                page={this.state.page}
                onChange={this.onPaginationChanged}
              ></Pagination>
            </PaginationWrap>
          </CatalogWrap>
        </ContainerWrap>
      </Container>
    );
  }
}

export const Catalog = withDataFetching({
  dataSource: `${manifest.api_url}item?filters=${JSURL.stringify(
    {}
  )}&page=0&limit=20`,
})(CatalogContainer);

const ContainerWrap = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 767px) {
    & {
      align-items: normal;
      flex-direction: column;
    }
  }
`;

const FilterWrap = styled.div`
  padding: 15px;
  flex: 1 0 25%;
`;

const CatalogWrap = styled.div`
  padding: 15px;
  flex: 1 0 65%;
`;

const SettingsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 60px;
  background-color: white;
`;
const PaginationWrap = styled.div`
  display: flex;
  justify-content: end;
  padding: 15px;
  height: 60px;
  background-color: white;
`;
const CardsWrap = styled.div`
  margin: 15px 0;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: minmax(260px, 1fr);
  background-color: white;
`;
