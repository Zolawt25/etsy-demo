import { Star } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";
import React from "react";
//
//
//
//
//
//
//
const Reviews = () => {
	const reviewsApi = [
		"Item was as described and a perfect addition for our nursery. I wanted something for a boy nursery that wasnt baby animals and screamed baby.",

		"Downloads came through immediately. High quality. I printed onto canvas prints super inexpensively online. They look awesome.",

		"Beth was incredibly helpful and took the time to answer all of my questions. Customer service was above and beyond.",
	];
	return (
		<Box
			mt={"20px"}
			sx={{
				width: {
					lg: "70%",
					md: "90%",
					xs: "100%",
				},
			}}
		>
			{reviewsApi.map((item, index) => {
				console.log(item);
				return (
					<Box
						key={index}
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
						pb={"10px"}
						borderBottom={1}
						borderColor={"#888"}
						mb={"10px"}
						sx={{
							flexDirection: {
								xs: "column",
								sm: "row",
							},
						}}
					>
						<Box display={"flex"} flexDirection={"column"}>
							<Rating
								name="read-only"
								value={5}
								readOnly
								size="small"
								sx={{ color: "#222", fontSize: "15px" }}
							/>
							<Typography
								sx={{
									width: {
										lg: "55%",
										md: "70%",
										xs: "95%",
									},
								}}
								mt={"3px"}
								fontSize="14px"
								color={"#333"}
							>
								{item}
							</Typography>
						</Box>
						<Box
							display={"flex"}
							flexDirection={"column"}
							sx={{
								width: {
									xs: "100%",
									sm: "350px",
								},
							}}
						>
							<Typography
								display={"flex"}
								alignItems={"center"}
								sx={{
									justifyContent: {
										sm: "end",
										xs: "start",
									},
								}}
								mr={"10px"}
								gap={1}
								fontSize={"13px"}
								color={"#222"}
								gutterBottom
							>
								Item quality <Box>5</Box> <Star fontSize="16px" />
							</Typography>
							<Typography
								display={"flex"}
								alignItems={"center"}
								sx={{
									justifyContent: {
										sm: "end",
										xs: "start",
									},
								}}
								mr={"10px"}
								gap={1}
								fontSize={"13px"}
								color={"#222"}
								gutterBottom
							>
								Shopping <Box>5</Box> <Star fontSize="16px" />
							</Typography>
							<Typography
								display={"flex"}
								alignItems={"center"}
								sx={{
									justifyContent: {
										sm: "end",
										xs: "start",
									},
								}}
								mr={"10px"}
								gap={1}
								fontSize={"13px"}
								color={"#222"}
								gutterBottom
							>
								Customer service <Box>5</Box> <Star fontSize="16px" />
							</Typography>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default Reviews;
