export interface Archive {
  "Hate": string,
  "Inspo": string,
}[]
export const archiveSchema = {
  name: "archive",
  fields: [
    { name: "Hate", type: "string",},
    { name: "Inspo", type: "string",},
        ],


}