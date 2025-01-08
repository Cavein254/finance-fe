import { gql } from "@apollo/client";

export const GET_TIME_SERIES_DAILY = gql(`
query GetTimeSeriesDaily($symbol: String!) {
  getTimeSeriesDaily(symbol: $symbol) {
    success
    data {
      date
      open
      high
      low
      close
      volume
    }
    error
  }
}
    `);
