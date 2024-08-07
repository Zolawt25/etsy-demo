import { Box, Typography, Link, Grid } from "@mui/material";
import productsArray from "../assets/products.json";
import Rating from "@mui/material/Rating";

const ProductCards = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				{productsArray.products.map((product) => (
					<Grid item key={product.id} xs={6} md={3} lg={2}>
						<Link
							href={`/product/${product.id}`}
							sx={{ textDecoration: "none" }}
						>
							<Box
								sx={{
									marginBottom: 4,
									transition: "transform 0.3s ease, box-shadow 0.3s ease",
									borderRadius: 1,
									bgcolor: "#f2f3f785",
									overflow: "hidden",
									"&:hover": {
										boxShadow: 3,
										transform: "scale(1.05)",
									},
								}}
							>
								<Box
									component="img"
									sx={{
										width: "100%",
										height: { md: 150, xs: 200 },
									}}
									alt={product.title}
									src={product.images[0]}
								/>
								<Box px={1} pb={1}>
									<Typography
										sx={{ fontSize: "0.9rem", color: "#222" }}
										gutterBottom
									>
										{product.title.length > 24
											? `${product.title.slice(0, 24)}...`
											: product.title}
									</Typography>
									<Typography sx={{ display: "flex", alignItems: "center" }}>
										<Rating
											name="size-medium"
											readOnly
											defaultValue={product.rating}
											sx={{ color: "black", fontSize: "17px" }}
										/>{" "}
										<Typography sx={{ color: "gray" }}>
											({product.reviewNumber})
										</Typography>
									</Typography>
									<Typography
										fontSize={"12px"}
										fontWeight={"bold"}
										color={"#222"}
									>
										USD {product.price}
									</Typography>
									<Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
										{product.owner.name}
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProductCards;
