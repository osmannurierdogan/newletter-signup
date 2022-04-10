const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});
