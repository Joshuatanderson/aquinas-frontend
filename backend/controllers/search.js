const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

/**
 *
 * @param {array of strings} params
 * @returns string of the format "\"param1\" \"param 2\""
 */

const queryifySearchTerms = (params) => {
	const modifiedParams = params
		.replace(":", " ") // handle searches in format of "Exodus 22:30"
		.split(" ") // split on words and phrases
		.map((param) => `\"${param}\"`)
		.join(" ");
	console.log(modifiedParams);

	return `${modifiedParams}`;
};

exports.searchData = async (req, res, next) => {
	const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.wcadp.mongodb.net/aquinas?retryWrites=true&w=majority`;
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	client.connect(async (err) => {
		try {
			if (!req.params?.searches?.length) {
				await res.status(500).json({
					status: "error",
					data: {
						message: "Params are not an array",
						params: params,
					},
				});
			}

			console.log(req.params);
			const db = await client.db("aquinas");

			const docs = await db
				.collection("data")
				.find({ $text: { $search: queryifySearchTerms(req.params.searches) } })
				.toArray();

			await res.status(203).json({
				status: "success",
				data: docs,
			});
			client.close();
		} catch (err) {
			await res.status(500).json({
				status: "error",
				data: { message: err.message },
				query: req.query,
				params: req.params,
			});
			client.close();
		}
	});
};
