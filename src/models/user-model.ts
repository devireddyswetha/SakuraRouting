import {
  IDbGetParams,
  IFromDbOptions,
  Model,
  SakuraApi,
  SapiModelMixin
} from '@sakuraapi/api';
import {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  Db as MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult
} from 'mongodb';

export {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult,
  IDbGetParams,
  IFromDbOptions,
  SakuraApi
};

@Model()
export class UserModel extends SapiModelMixin() {
}
