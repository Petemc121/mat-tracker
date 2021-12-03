const express = require("express");
const cors = require("cors");
const importedPool = require("./database");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware

app.use(cors());
app.use(express.json()); //req.body

app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === "production") {
  //server static contents
  //npm run build
  app.use(express.static(path.join(__dirname, "build")));
}

//adds members to member table on request.

app.post("/members", async (req, res) => {
  try {
    const {
      member_name,
      member_phone,
      member_belt,
      member_joined_at,
      member_paid,
      member_frozen,
    } = req.body;

    const newMember = await importedPool.query(
      "INSERT INTO members (member_name, member_phone, member_belt, member_joined_at, member_paid, member_frozen) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        member_name,
        member_phone,
        member_belt,
        member_joined_at,
        member_paid,
        member_frozen,
      ]
    );

    res.json(newMember.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all members

app.get("/members", async (req, res) => {
  try {
    const allMembers = await importedPool.query("SELECT * FROM members");
    res.json(allMembers.rows);
    console.log(allMembers.rows);
  } catch (error) {
    console.log(error);
  }
});

//get a member

app.get("/members/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const member = await importedPool.query(
      `SELECT * FROM members WHERE member_name= $1`,
      [name]
    );

    res.json(member.rows);
  } catch (error) {
    console.log(error);
  }
});

//update a member

app.put("/members/:id", async (req, res) => {
  const { id } = req.params;
  const {
    member_name,
    member_phone,
    member_belt,
    member_joined,
    member_paid,
    member_frozen,
  } = req.body;
  console.log(req.body);

  const updateMember = await importedPool.query(
    "UPDATE members SET member_name = $1, member_phone = $2, member_belt = $3, member_joined_at = $4, member_paid = $5, member_frozen = $6 WHERE member_id = $7",
    [
      member_name,
      member_phone,
      member_belt,
      member_joined,
      member_paid,
      member_frozen,
      parseInt(id),
    ]
  );

  res.json("member updated");
});

//delete a members

app.delete("/members/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await importedPool.query(
      "DELETE FROM members WHERE member_id = $1",
      [id]
    );

    res.json("member deleted");
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
