import { db } from "../db.js";

export const getReviews = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM anime_reviews WHERE animeCategory = ?;"
    : req.query.type
    ? "SELECT * FROM anime_reviews WHERE animeType = ?;"
    : req.query.status
    ? "SELECT * FROM anime_reviews WHERE animeStatus = ?;"
    : "SELECT * FROM anime_reviews;";

  const query =
    q === "SELECT * FROM anime_reviews WHERE animeCategory = ?;"
      ? req.query.category
      : q === "SELECT * FROM anime_reviews WHERE animeType = ?;"
      ? req.query.type
      : q === "SELECT * FROM anime_reviews WHERE animeStatus = ?;"
      ? req.query.status
      : null;

  db.query(q, [query], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getReview = (req, res) => {
  const id = req.params.id;
  const sqlGet = "SELECT * FROM anime_reviews WHERE id = ?";

  db.query(sqlGet, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const addReview = (req, res) => {
  const animeName = req.body.animeName;
  const animeSynopsis = req.body.animeSynopsis;
  const animeType = req.body.animeType;
  const animeYear = req.body.animeYear;
  const animeStatus = req.body.animeStatus;
  const animeImg = req.body.animeImg;
  const animeCategory = req.body.animeCategory;

  const sqlInsert =
    "INSERT INTO anime_reviews (animeName, animeSynopsis, animeType, animeYear, animeStatus, animeImg, animeCategory) VALUES (?,?,?,?,?,?,?);";

  db.query(
    sqlInsert,
    [
      animeName,
      animeSynopsis,
      animeType,
      animeYear,
      animeStatus,
      animeImg,
      animeCategory,
    ],
    (err, data) => {
      if (err) return res.send(err);

      return res.status(200).json(data);
    }
  );
};

export const deleteReview = (req, res) => {
  const id = req.params.id;
  // const sqlDelete = "DELETE FROM anime_reviews WHERE id = ?";
  const sqlDelete =
    "DELETE anime_reviews,comments FROM anime_reviews JOIN comments ON anime_reviews.id = comments.animeId WHERE anime_reviews.id = ?";

  db.query(sqlDelete, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const updateReview = (req, res) => {
  const id = req.body.id;
  const newSynopsis = req.body.newSynopsis;
  const newName = req.body.newName;
  const newImg = req.body.newImg;
  const newType = req.body.newType;
  const newYear = req.body.newYear;
  const newStatus = req.body.newStatus;
  const sqlUpdate =
    "UPDATE anime_reviews SET animeSynopsis = ?, animeName = ?, animeImg = ?, animeType = ?, animeYear = ?, animeStatus = ?  WHERE id = ?";

  db.query(
    sqlUpdate,
    [newSynopsis, newName, newImg, newType, newYear, newStatus, id],
    (err, data) => {
      if (err) return res.send(err);

      return res.status(200).json(data);
    }
  );
};
