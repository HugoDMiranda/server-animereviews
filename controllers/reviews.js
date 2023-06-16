import { db } from "../db.js";

export const getReviews = async (req, res) => {
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

  await db.query(q, [query], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getReview = async (req, res) => {
  const id = req.params.id;
  const sqlGet = "SELECT * FROM cruddb.anime_reviews WHERE id = ?";

  await db.query(sqlGet, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const addReview = async (req, res) => {
  const animeName = req.body.animeName;
  const animeSynopsis = req.body.animeSynopsis;
  const animeType = req.body.animeType;
  const animeYear = req.body.animeYear;
  const animeStatus = req.body.animeStatus;
  const animeImg = req.body.animeImg;
  const animeCategory = req.body.animeCategory;

  const sqlInsert =
    "INSERT INTO anime_reviews (animeName, animeSynopsis, animeType, animeYear, animeStatus, animeImg, animeCategory) VALUES (?,?,?,?,?,?,?);";

  await db.query(
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

export const deleteReview = async (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM anime_reviews WHERE id = ?";

  await db.query(sqlDelete, id, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const updateReview = async (req, res) => {
  const id = req.body.id;
  const newSynopsis = req.body.newSynopsis;
  const newName = req.body.newName;
  const newImg = req.body.newImg;
  const newType = req.body.newType;
  const newYear = req.body.newYear;
  const newStatus = req.body.newStatus;
  const sqlUpdate =
    "UPDATE anime_reviews SET animeSynopsis = ?, animeName = ?, animeImg = ?, animeType = ?, animeYear = ?, animeStatus = ?  WHERE id = ?";

  await db.query(
    sqlUpdate,
    [newSynopsis, newName, newImg, newType, newYear, newStatus, id],
    (err, data) => {
      if (err) return res.send(err);

      return res.status(200).json(data);
    }
  );
};
