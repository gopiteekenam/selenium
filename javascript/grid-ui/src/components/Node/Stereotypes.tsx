// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import {
  Box,
  createStyles,
  Grid,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import React from 'react';
import StereotypeInfo from "../../models/stereotype-info";
import BrowserLogo from "../common/BrowserLogo";

const useStyles = (theme: Theme) => createStyles(
  {
    slotInfo: {
      marginBottom: 5,
      marginRight: 10,
    },
  });

type StereotypesProps = {
  stereotypes: StereotypeInfo[];
  classes: any;
};

class Stereotypes extends React.Component<StereotypesProps, {}> {

  render () {
    const {stereotypes, classes} = this.props;

    function CreateStereotypeGridItem(slotStereotype: StereotypeInfo, index: any) {
      return (
        <Grid item key={index}>
          <Grid container alignItems='center' spacing={1}>
            <Grid item>
              <BrowserLogo browserName={slotStereotype.browserName}/>
            </Grid>
            <Grid item>
              <Typography className={classes.slotInfo}>
                {slotStereotype.slotCount}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.slotInfo}>
                {slotStereotype.browserVersion}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return (
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          <Box fontWeight="fontWeightBold" mr={1} display='inline'>
            Stereotypes
          </Box>
        </Typography>
        <Grid container direction="row">
          {
            stereotypes
              .sort((a, b) => a.browserName.localeCompare(b.browserName)
                              || a.browserVersion.localeCompare(b.browserVersion))
              .map((slotStereotype: any, idx) => {
                return (
                  CreateStereotypeGridItem(slotStereotype, idx)
                )
              })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Stereotypes)
