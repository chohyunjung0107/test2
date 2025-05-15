const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const dataFile = "./data.json";

const readUsers = () => {
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
};

// GET 유저 조회
router.get("/", (req, res) => {
  const users = readUsers();
  const query = req.query;

  if (Object.keys(query).length === 0) {
    return res.json(users); // 쿼리 없으면 전체 조회
  }

  const filtered = users.filter((user) => {
    return Object.entries(query).every(([key, value]) => {
      const userValue = user[key];

      // 존재하지 않는 키이거나, 값이 없으면 false
      if (userValue === undefined || value === undefined) return false;

      // 부분 문자열 매칭 (LIKE 검색)
      return String(userValue)
        .toLowerCase()
        .includes(String(value).toLowerCase());
    });
  });

  res.json(filtered);
});

// POST 유저 생성
router.post("/", (req, res) => {
  const users = readUsers();
  const newUser = {
    id: req.body.id,
    password: req.body.password,
    name: req.body.name,
    faceImage: req.body.faceImage,
    age: req.body.age,
    sex: req.body.sex,
    address: req.body.address,
    tel: req.body.tel,
    mobile: req.body.mobile,
    email: req.body.email,
    birthday: req.body.birthday,
  };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});

// PUT 유저 수정
router.put("/:id", (req, res) => {
  let users = readUsers();
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.json(users[index]);
});

// DELETE 유저 삭제
router.delete("/:id", (req, res) => {
  let users = readUsers();
  const newUsers = users.filter((u) => u.id !== req.params.id);
  if (users.length === newUsers.length)
    return res.status(404).json({ error: "User not found" });

  writeUsers(newUsers);
  res.status(204).send();
});

module.exports = router;
