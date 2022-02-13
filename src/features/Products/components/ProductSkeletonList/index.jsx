import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 8,
};

function ProductSkeletonList(props) {
  const { length } = props;

  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton variant="text" />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
