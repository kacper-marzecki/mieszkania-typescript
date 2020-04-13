const indexdb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
const DB_NAME = "FS_Mieszkania_DB";
var db;

const request = indexdb.open(DB_NAME, 1);

request.onerror = function (event) {
  console.log("Cannot use indexed db");
};

request.onsuccess = function (event) {
  db = event.target.result;
  db.onerror = (event) => {
    console.error(JSON.stringify(event));
  };
};

request.onupgradeneeded = function (event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("favouriteHomes", { keyPath: "id" });
  objectStore.createIndex("id", "id", { unique: true });
};

const pipeResult = (onSuccess) => (e) => {
  onSuccess(e.target.result);
};

export const favouriteHome = (home) => {
  return db
    .transaction(["favouriteHomes"], "readwrite")
    .objectStore("favouriteHomes")
    .add(home);
};

export const getFavouriteHomes = (onSuccess) => {
  if (db) {
    const request = db
      .transaction("favouriteHomes")
      .objectStore("favouriteHomes")
      .getAll();
    request.onsuccess = pipeResult(onSuccess);
  } else {
    return [];
  }
};
export const getFavouriteHomeById = (id, onSuccess) => {
  if (db) {
    const request = db
      .transaction("favouriteHomes")
      .objectStore("favouriteHomes")
      .get(id);
    request.onsuccess = pipeResult(onSuccess);
  } else {
    return {};
  }
};
export const removeFavouriteHome = (home) => {
  return db
    .transaction(["favouriteHomes"], "readwrite")
    .objectStore("favouriteHomes")
    .delete(home.id);
};
