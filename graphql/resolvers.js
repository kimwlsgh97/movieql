import {Movies} from "./db";

const resolvers = {
    Query: {
        name: () => "nicolas",
        movies: () => Movies
    }
};

export default resolvers;