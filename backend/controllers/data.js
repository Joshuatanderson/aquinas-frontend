const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

exports.getData = async (req, res, next) => {
	console.info("server connection live");

	const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.wcadp.mongodb.net/aquinas?retryWrites=true&w=majority`;
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	client.connect(async (err) => {
		try {
			const db = await client.db("aquinas");
			const docs = await db.collection("data").find({}).toArray();

			// perform actions on the collection object
			await res.status(203).json({
				status: "success",
				data: docs,
			});
			console.log("data sent");
			client.close();
		} catch (err) {
			await res.status(500).json({
				status: "error",
				data: { err },
			});
			client.close();
		}
	});
};
