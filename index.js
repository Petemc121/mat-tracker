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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var database_1 = require("./database");
var app = express_1["default"]();
var PORT = process.env.PORT || 5000;
var path = require("path");
//process.env.PORT
//process.env.NODE_ENV => production or undefined
//middleware
app.use(cors_1["default"]());
app.use(express_1["default"].json()); //req.body
if (process.env.NODE_ENV === "production") {
    //server static contents
    //npm run build
    app.use(express_1["default"].static(path.join(__dirname, "client/build")));
}
//ROUTES
//adds members to member table on request.
app.post("/members", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, member_name, member_phone, member_belt, member_joined_at, newMember, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, member_name = _a.member_name, member_phone = _a.member_phone, member_belt = _a.member_belt, member_joined_at = _a.member_joined_at;
                return [4 /*yield*/, database_1.pool.query("INSERT INTO members (member_name, member_phone, member_belt, member_joined_at) VALUES($1, $2, $3, $4) RETURNING *", [member_name, member_phone, member_belt, member_joined_at])];
            case 1:
                newMember = _b.sent();
                res.json(newMember.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                console.log(err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// get all members
app.get("/members", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allMembers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_1.pool.query("SELECT * FROM members")];
            case 1:
                allMembers = _a.sent();
                res.json(allMembers.rows);
                console.log(allMembers.rows);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get a member
app.get("/members/:name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, member, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name_1 = req.params.name;
                return [4 /*yield*/, database_1.pool.query("SELECT * FROM members WHERE member_name= $1", [name_1])];
            case 1:
                member = _a.sent();
                res.json(member.rows);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//update a member
app.put("/members/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, belt, updateMember;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                belt = req.body.belt;
                return [4 /*yield*/, database_1.pool.query("UPDATE members SET member_belt = $1 WHERE member_id = $2", [belt, id])];
            case 1:
                updateMember = _a.sent();
                res.json("member updated");
                return [2 /*return*/];
        }
    });
}); });
//delete a members
app["delete"]("/members/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteTodo, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, database_1.pool.query("DELETE FROM members WHERE member_id = $1", [id])];
            case 1:
                deleteTodo = _a.sent();
                res.json("member deleted");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});
app.listen(PORT, function () {
    console.log("Server is starting on port " + PORT);
});
//"heroku-postbuild": "cd client && npm install && npm run build",
// {
//   "compilerOptions": {
//     "jsx": "react",
//     "module": "commonjs",
//     "esModuleInterop": true,
//     "target": "es6",
//     "moduleResolution": "node",
//     "sourceMap": true,
//     "outDir": "dist"
//   },
//   "lib": ["es2015"]
// }
