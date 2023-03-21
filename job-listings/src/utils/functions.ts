import { readFile } from "fs";

export interface JobData {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}

export function readJobDataFromFile(path: string): Promise<JobData> {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err || !data) {
        reject(err);
        throw err;
      }

      const parsed = JSON.parse(data.toString());

      resolve(parsed);
    });
  });
}