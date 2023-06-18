import { db } from "../db.js";

export const getComments = (req, res) => {
  const id = req.params.id;
  const sqlGet = "SELECT * FROM comments WHERE animeId = ?";

  db.query(sqlGet, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getAllUsers = (req, res) => {
  const sqlGet = "SELECT * FROM users;";

  db.query(sqlGet, "", (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getAllRatios = (req, res) => {
  const q = "SELECT animeId, AVG(ratio) FROM comments GROUP BY animeId;";
  db.query(q, "", (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getAllComments = (req, res) => {
  const q = "SELECT * FROM comments;";

  db.query(q, "", (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const insertComment = (req, res) => {
  const commentText = req.body.commentText;
  const ratio = req.body.ratio;
  const userId = req.body.userId;
  const animeId = req.body.animeId;

  const sqlInsert =
    "INSERT INTO comments (comment_text, ratio, userId, animeId ) VALUES (?,?,?,?);";

  db.query(sqlInsert, [commentText, ratio, userId, animeId], (err, result) => {
    if (err) return res.send(err);
    return res.status(200).json(result);
  });
};

export const deleteComment = (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM comments WHERE id = ?";

  db.query(sqlDelete, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const updateComment = (req, res) => {
  const id = req.body.id;
  const newComment = req.body.newComment;
  const newRatio = req.body.newRatio;
  const sqlUpdate =
    "UPDATE comments SET comment_text = ?, ratio = ? WHERE id = ?";

  db.query(sqlUpdate, [newComment, newRatio, id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
