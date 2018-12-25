export const SET_FILTER = "FILTER/SET_FILTER";

export function setFilter (filter: string) {
  return { type: SET_FILTER, payload: { filter } }
}

