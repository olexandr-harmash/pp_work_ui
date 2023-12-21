import React from "react";

const withDataFetching = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: {},
        loading: true,
        error: "",
      };
    }

    fetch = async (url) => {
      console.log(url)
      try {
        const data = await fetch(url);
        const dataJSON = await data.json();

        if (dataJSON) {
          this.setState({
            data: dataJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    };

    async componentDidMount() {
      await this.fetch(props.dataSource);
    }

    render() {
      const { data, loading, error } = this.state;

      return (
        <WrappedComponent
          fetch={this.fetch}
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
};

export default withDataFetching;
