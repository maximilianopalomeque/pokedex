import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./TabPanel";
import AboutTab from "./AboutTab";
import StatsTab from "./StatsTab";

const PokemonTab = ({ pokemon }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="About" />
            <Tab label="Stats" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AboutTab pokemon={pokemon} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StatsTab stats={pokemon.stats} />
        </TabPanel>
      </Box>
    </>
  );
};

export default PokemonTab;
