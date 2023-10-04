import {app, PORT} from "./config/Config1.js";
import connectDB from "./config/Config2.js";

const main = async()=>{
	try {
		//connectDB();
	    app.listen(PORT, () => {
			console.log(`Server is up and running at port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

main();