"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const path = require("path");
//process.env.PORT
//process.env.NODE_ENV => production or undefined
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); //req.body
if (process.env.NODE_ENV === "production") {
    //server static contents
    //npm run build
    app.use(express_1.default.static(path.join(__dirname, "client/build")));
}
//ROUTES
//adds members to member table on request.
app.post("/members", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { member_name, member_phone, member_belt, member_joined_at } = req.body;
        const newMember = yield database_1.pool.query("INSERT INTO members (member_name, member_phone, member_belt, member_joined_at) VALUES($1, $2, $3, $4) RETURNING *", [member_name, member_phone, member_belt, member_joined_at]);
        res.json(newMember.rows[0]);
    }
    catch (err) {
        console.log(err.message);
    }
}));
// get all members
app.get("/members", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMembers = yield database_1.pool.query("SELECT * FROM members");
        res.json(allMembers.rows);
        console.log(allMembers.rows);
    }
    catch (error) {
        console.log(error);
    }
}));
//get a member
app.get("/members/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const member = yield database_1.pool.query(`SELECT * FROM members WHERE member_name= $1`, [name]);
        res.json(member.rows);
    }
    catch (error) {
        console.log(error);
    }
}));
//update a member
app.put("/members/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { belt } = req.body;
    const updateMember = yield database_1.pool.query("UPDATE members SET member_belt = $1 WHERE member_id = $2", [belt, id]);
    res.json("member updated");
}));
//delete a members
app.delete("/members/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteTodo = yield database_1.pool.query("DELETE FROM members WHERE member_id = $1", [id]);
        res.json("member deleted");
    }
    catch (error) {
        console.log(error);
    }
}));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});
//"heroku-postbuild": "cd client && npm install && npm run build",
//# sourceMappingURL=server.js.map