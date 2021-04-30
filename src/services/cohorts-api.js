const BASE_URL = "/api/cohorts";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(cohort) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(cohort),
  }).then((res) => res.json());
}

export function update(cohort) {
  return fetch(`${BASE_URL}/${cohort._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(cohort),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
