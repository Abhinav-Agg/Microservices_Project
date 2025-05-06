const asyncHandler = (func) => async (req, res, next) => {
    try{
        await func(req, res, next);
    }
    catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            return res.status(502).json({ error: "No response from auth service" });
        }
        else {
            return res.status(500).json({ error: "Internal Gateway Error" });
        }
    }
};

module.exports = {asyncHandler};