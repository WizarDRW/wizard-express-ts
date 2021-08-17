import mongoose from "mongoose";

export class MongoContext {
  private static _instance: MongoContext;
  constructor(private conn: string) {}
  public static getInstance(conn: string): MongoContext {
    if (!MongoContext._instance)
      MongoContext._instance = new MongoContext(conn);

    return MongoContext._instance;
  }

  connection() {
    mongoose.connect(this.conn, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    mongoose.connection.on("open", () => {
      console.log("MongoDB: Connected");
      // serverLogger.info('MongoDB: Connected')
    });
    mongoose.connection.on("error", (err) => {
      console.log("MongoDB: Error", err);
      // serverLogger.error(`MongoDB: Error: ${err.message}`)
    });

    mongoose.Promise = global.Promise;
  }
}
