#quick philly race/ath breakdown

library(pacman)
p_load(data.table, lest, tidycensus)

philly_race_eth <- get_acs(geography = "county", variables = c(tot_pop = "B03002_001",
                                                               nh_white = "B03002_003",
                                                               nh_black = "B03002_004",
                                                               nh_aian = "B03002_005",
                                                               nh_asian = "B03002_006",
                                                               nh_hawaiian = "B03002_007",
                                                               nh_other = "B03002_008",
                                                               hispanic = "B03002_012"), 
                           year = 2021, state = "PA", survey = "acs1", 
                           county = "Philadelphia")

philly_race_eth <- data.table(philly_race_eth)

philly_race_eth[, pop_prop := estimate/1576251]

fwrite(x = philly_race_eth, file = "judge_data_r_ladies/census/philly_2021_race_ethnicity_ACS_1_year.csv")
