import {
  AddRounded,
  DoneRounded,
  ErrorRounded,
  ExpandMoreRounded,
  FilterAltRounded,
  SearchRounded,
  SendRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import problemFilters from "../consts/problemFilters";

const Problems = () => {
  const exampleProblems = [
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "AzisAzisAzisAzis",
      tags: ["Hard", "Unsolved"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Niggas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Unsolved"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Unsolved"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
    {
      name: "Example problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat eget quam auctor convallis a eget tellus. Ut tempor mi justo, id egestas enim elementum sed. Sed consectetur velit feugiat odio condimentum, nec ultrices mi hendrerit.",
      creator: "Azis",
      tags: ["Hard", "Easy"],
    },
  ];

  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [problemCreationOpen, setProblemCreationOpen] = useState(false);
  const [hints, setHints] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const addFilter = (e) => {
    if (!activeFilters.includes(e)) {
      setActiveFilters([...activeFilters, e]);
    } else {
      setActiveFilters(activeFilters.filter((item) => item !== e));
    }
  };

  const getSelectedItems = (arr1, arr2) => {
    var selected = [];

    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          selected.push(arr1[i]);
        }
      }
    }

    return selected;
  };

  function ProblemCreation() {
    return (
      <>
        <Dialog
          open={problemCreationOpen}
          onClose={() => setProblemCreationOpen(false)}
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            {"Create a new problem"}
          </DialogTitle>
          <DialogContent>
            <Grid container rowGap={2} columnSpacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  id="name"
                  label="Problem Name"
                  type="text"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  placeholder="Problem Description"
                  type="text"
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                    <Typography variant="h6">Hints</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} md={6}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                    <Typography variant="h6">Test Cases</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </DialogContent>
          <Divider variant="middle" />
          <DialogActions sx={{ p: 3, justifyContent: "flex-start" }}>
            <RadioGroup row defaultValue="public" sx={{ flexGrow: 1 }}>
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
            <Button variant="contained" endIcon={<SendRounded />}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  function FilterMenu() {
    return (
      <>
        <Grid container spacing={0.5} sx={{ alignItems: "stretch" }}>
          {problemFilters.map((filter, index) => (
            <Grid item zeroMinWidth xs={4}>
              <Chip
                sx={{ width: "100%" }}
                deleteIcon={<DoneRounded />}
                onDelete={activeFilters.includes(filter.label) ? true : false}
                onClick={() => addFilter(filter.label)}
                key={index}
                label={filter.label}
                color={filter.color}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backdropFilter: "blur(20px)",
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          position: "fixed",
          width: "100vw",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "nowrap", flexGrow: 1 }}>
          <TextField
            onChange={handleSearchChange}
            sx={{ ml: "10px" }}
            variant="standard"
            type="search"
            placeholder="Search for problems"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip arrow title={<FilterMenu />} open={filterMenuOpen}>
            <IconButton
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              sx={{ mr: "10px" }}
            >
              <FilterAltRounded />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip placement="left" arrow title="Create new problem">
          <IconButton
            onClick={() => setProblemCreationOpen(true)}
            sx={{ mr: "30px" }}
          >
            <AddRounded />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: "flex", p: 1, pt: "50px" }}>
        <ProblemCreation />
        <Grid container spacing={2}>
          {exampleProblems.map((problem) => (
            <>
              {problem.tags.includes(
                ...getSelectedItems(activeFilters, problem.tags)
              ) &&
                activeFilters.length > 0 &&
                problem.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) && (
                  <Grid item zeroMinWidth xs={12} sm={6} md={4}>
                    <Card>
                      <CardContent>
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{ flexGrow: 1, mb: "10px" }}
                        >
                          {problem.name}
                        </Typography>
                        <Typography paragraph>{problem.description}</Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            width: "100%",
                          }}
                        >
                          <Box sx={{ flexGrow: 1 }}>
                            {problem.tags.map((tag) => (
                              <Chip
                                sx={{ mr: "5px" }}
                                label={tag}
                                color={
                                  tag === "Hard"
                                    ? "error"
                                    : tag === "Medium"
                                    ? "warning"
                                    : tag === "Easy"
                                    ? "success"
                                    : tag === "Solved"
                                    ? "primary"
                                    : "default"
                                }
                              />
                            ))}
                          </Box>
                          <Chip
                            avatar={<Avatar src="#" />}
                            label={`Created by ${problem.creator}`}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
            </>
          ))}
          {exampleProblems.map((problem) => (
            <>
              {activeFilters.length === 0 &&
                problem.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) && (
                  <Grid item zeroMinWidth xs={12} md={6} lg={4}>
                    <Card>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            width: "100%",
                            mb: "10px",
                          }}
                        >
                          <Typography variant="h6" noWrap>
                            {problem.name}
                          </Typography>
                        </Box>
                        <Typography paragraph>{problem.description}</Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            width: "100%",
                          }}
                        >
                          <Box sx={{ flexGrow: 1 }}>
                            {problem.tags.map((tag) => (
                              <Chip
                                sx={{ mr: "5px" }}
                                label={tag}
                                color={
                                  tag === "Hard"
                                    ? "error"
                                    : tag === "Medium"
                                    ? "warning"
                                    : tag === "Easy"
                                    ? "success"
                                    : tag === "Solved"
                                    ? "primary"
                                    : "default"
                                }
                              />
                            ))}
                          </Box>
                          <Chip
                            avatar={<Avatar src="#" />}
                            label={`Created by ${problem.creator}`}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
            </>
          ))}
          {!exampleProblems.some((element) =>
            element.name.toLowerCase().includes(searchText.toLowerCase())
          ) && (
            <Grid item xs={12} sx={{ width: "100%", mt: "200px" }}>
              <Typography align="center" variant="h4" sx={{ mb: "10px" }}>
                No such problem found
              </Typography>
              <Box textAlign="center">
                <ErrorRounded fontSize="large" />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Problems;
