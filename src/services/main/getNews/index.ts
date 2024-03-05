import { NewsTypes } from "@types";
import { mongoClient } from "@configurations";
import { NewsSource, TablesEnum } from "@enums";
import { MongoClient } from "mongodb";

const getNewsService = async (
  source?: string,
): Promise<NewsTypes.IGetNewsResponse> => {
  try {
    const dbClient = await mongoClient.connect();

    const data: NewsTypes.IGetNewsResponse["data"] = {};

    switch (source) {
      case NewsSource.SH: {
        data[NewsSource.SH] = await getSHNews(dbClient);
        break;
      }
      case NewsSource.AL: {
        data[NewsSource.AL] = await getALNews(dbClient);
        break;
      }
      default: {
        data[NewsSource.SH] = await getSHNews(dbClient);
        data[NewsSource.AL] = await getALNews(dbClient);
      }
    }

    return {
      isError: false,
      data: data,
    };
  } catch (_) {
    return {
      isError: true,
    };
  }
};

const getSHNews = async (dbClient: MongoClient) => {
  try {
    const newsSHDocument = dbClient
      .db(TablesEnum.NEWS_TABLE)
      .collection(TablesEnum.SH_NEWS_COLLECTION);

    return (
      await newsSHDocument
        .find({}, { projection: { _id: 0 } })
        .sort({ createdTimestamp: -1 })
        .toArray()
    ).map((v) => v as unknown as NewsTypes.IGetNewsSHData);
  } catch (_) {
    return [];
  }
};

const getALNews = async (dbClient: MongoClient) => {
  try {
    const newsALDocument = dbClient
      .db(TablesEnum.NEWS_TABLE)
      .collection(TablesEnum.AL_NEWS_COLLECTION);

    return (
      await newsALDocument
        .find({}, { projection: { _id: 0 } })
        .sort({ createdTimestamp: -1 })
        .toArray()
    ).map((v) => v as unknown as NewsTypes.IGetNewsALData);
  } catch (e) {
    return [];
  }
};

export { getNewsService };
