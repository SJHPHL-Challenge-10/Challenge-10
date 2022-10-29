library(pacman)
p_load(data.table, lest, tidycensus)

offense <- fread("judge_data_r_ladies/offenses_dispositions_v3.csv", colClasses = "character")
docket_dt <- fread("judge_data_r_ladies/defendant_docket_details.csv", colClasses = "character")

defendants <- fread("judge_data_r_ladies/defendant_docket_ids.csv", colClasses = "character")

asdf <- defendants[docket_dt, on = .(docket_id)]
