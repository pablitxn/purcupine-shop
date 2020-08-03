const offers = [
	{
		id: 1,
		name: "Brown Brim %%%%% OFF",
		imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
		price: 25,
	},
	{
		id: 2,
		name: "Blue Beanie %%%%% OFF",
		imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
		price: 18,
	},
	{
		id: 3,
		name: "Brown Cowboy %%%%% OFF",
		imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
		price: 35,
	},
];

export default (req, res) => {
	res.statusCode = 200;
	res.json({ offers });
};
