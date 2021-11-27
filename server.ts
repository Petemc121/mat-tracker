import { Application, Response, Request } from "express";
import express from "express";
import cors from "cors";
import { pool } from "./database";

const app: Application = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware

app.use(cors());
app.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
  //server static contents
  //npm run build
  app.use(express.static(path.join(__dirname, "build")));
}

//ROUTES

//adds members to member table on request.

app.post("/members", async (req: Request, res: Response) => {
  try {
    const { member_name, member_phone, member_belt, member_joined_at } =
      req.body;

    const newMember = await pool.query(
      "INSERT INTO members (member_name, member_phone, member_belt, member_joined_at) VALUES($1, $2, $3, $4) RETURNING *",
      [member_name, member_phone, member_belt, member_joined_at]
    );

    res.json(newMember.rows[0]);
  } catch (error: any) {
    console.log(error.message);
  }
});

// get all members

app.get("/members", async (req: Request, res: Response) => {
  try {
    const allMembers = await pool.query("SELECT * FROM members");
    res.json(allMembers.rows);
    console.log(allMembers.rows);
  } catch (error) {
    console.log(error);
  }
});

//get a member

app.get("/members/:name", async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const member = await pool.query(
      `SELECT * FROM members WHERE member_name= $1`,
      [name]
    );

    res.json(member.rows);
  } catch (error) {
    console.log(error);
  }
});

//update a member

app.put("/members/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { belt } = req.body;

  const updateMember = await pool.query(
    "UPDATE members SET member_belt = $1 WHERE member_id = $2",
    [belt, id]
  );

  res.json("member updated");
});

//delete a members

app.delete("/members/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM members WHERE member_id = $1",
      [id]
    );

    res.json("member deleted");
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

//"heroku-postbuild": "cd client && npm install && npm run build",
