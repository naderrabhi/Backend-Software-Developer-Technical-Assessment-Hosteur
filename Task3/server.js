const express = require('express');

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const { input1, input2, input3, input4, input5 } = req.body;
    const emailExpression = `${input1.slice(0,1)}.${input2.slice(0,1)}@${input3}.${input4}.${input5}`
    const email = emailExpression.toLowerCase();
    res.json({
    data: [
        {
            id: email,
            value: email
        }
    ]
    });
});


const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});