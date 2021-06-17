

exports.getData = async (req, res) => {
	console.log("well, I'm kind of here")
	res.status(203).json({
		status: "success",
		data: {}
	})
}