const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

const MOCKED_PARAMS = ["Genesis", "book 4"]

/**
 * 
 * @param {array of strings} params 
 * @returns string of the format "\"param1\" \"param 2\""
 */

const queryifySearchTerms = (params) => {
	const modifiedParams = params.map(param => `\"${param}\"`).join(" ");
	console.log(modifiedParams)

	return `${modifiedParams}`;
}

exports.searchData = async (req, res, next) => {
	console.info("search is live");

	const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.wcadp.mongodb.net/aquinas?retryWrites=true&w=majority`;
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	client.connect(async (err) => {
		try {

			const db = await client.db("aquinas");
			
			const docs = await db.collection("data")
				.find({$text: {$search: queryifySearchTerms(MOCKED_PARAMS)}})
				.toArray();

			await res.status(203).json({
				status: "success",
				data: {
					docs,
					params: queryifySearchTerms(MOCKED_PARAMS)
				}
			})
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
