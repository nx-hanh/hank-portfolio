"use server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
const DATABASE = "PERSONAL";
const COLLECTION = "Project";

export const getProjects = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const projects = await db.collection(COLLECTION).find({}).toArray();
    return projects as Project[];
  } catch (error) {
    console.error(error);
    return [] as Project[];
  }
};

export const getProject = async (id: string) => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const project = await db
      .collection(COLLECTION)
      .findOne({ _id: new ObjectId(id) });
    return project as Project;
  } catch (error) {
    console.error(error);
    return {} as Project;
  }
};

export const createProject = async (project: Project) => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const result = await db.collection(COLLECTION).insertOne(project);
    return result.insertedId;
  } catch (error) {
    console.error(error);
    return "";
  }
};
export const createProjects = async (projects: Project[]) => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const projectsDb = await db.collection(COLLECTION).find({}).toArray();
    const projectsNotInDb = projects.filter(
      (project) =>
        !projectsDb.find((projectDb) => projectDb.name === project.name)
    );
    console.log(projectsNotInDb);
    const result = await db.collection(COLLECTION).insertMany(projectsNotInDb);
    return result.insertedIds;
  } catch (error) {
    console.error(error);
    return [];
  }
};
