import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HashLoader } from "react-spinners";
import {motion} from 'framer-motion'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabCategories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //fetching data using tanstack query
  const { isPending, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios("https://jobquest-server-pi.vercel.app/jobs");
      return res.data;
    },
  });
  if (isPending) return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>;

  return (
    <div className="  px-4 mx-auto my-16">
      <div className="text-center">
        <motion.h1 initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
        }} className="text-3xl font-bold">Browse Jobs By Categories</motion.h1>
        <motion.p initial={{x: 100, opacity: 0}}
         whileInView={{x: 0, opacity: 1}}
         transition={{
                 delay: 0.4,
                 x: {type: "spring", stiffness: 60},
                 opacity: {duration: 0.2},
                 ease: "easeIn",
                 duration: 1,
         }} className="my-4">
          Explore jobs by the categories of On site, Remote, Hybrid and Part
          time job.
        </motion.p>
      </div>
      <div className="flex justify-center items-center">
        <Box sx={{ width: "100%", margin: "0 auto"}}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              className="overflow-x-auto"
              centered
              value={value}
              
              onChange={handleChange}
              aria-label="basic tabs example"
              variant={window.innerWidth <= 768 ? "scrollable" : "standard"}
              scrollButtons="auto"
              
            >
              <Tab label="On-Site Job" {...a11yProps(0)} />
              <Tab
                label="Remote Job
"
                {...a11yProps(1)}
              />
              <Tab 
                label="Hybrid
"         
                {...a11yProps(2)}
              />
              <Tab
                label="Part-Time
"
                {...a11yProps(3)}
              />
              <Tab
                label="All Jobs
"
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="grid grid-cols-1 gap-6  md:grid-cols-2 xl:grid-cols-3">
              {jobs
                .filter((job) => job.category === "On Site")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="grid grid-cols-1 gap-3  md:grid-cols-2 xl:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Remote")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="grid grid-cols-1 gap-3  md:grid-cols-2 xl:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Hybrid")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="grid grid-cols-1 gap-3  md:grid-cols-2 xl:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Part Time")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-1 gap-3  md:grid-cols-2 xl:grid-cols-3">
              {jobs
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
      </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
