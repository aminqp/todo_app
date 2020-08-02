const SERVER_URL = '{{app_host}}';
const API_VERSION_VALUE = 'api/v1';
const API_VERSION_KEY = '{{api_version}}';
const POSTMAN_LOCAL_PATH = './postman_local.json';
const PACKAGE_JSON_PATH = './package.json';
const COLLECTION_POSTFIX = 'Collection';
const HTTP_INSTANCE_IMPORT = 'import { Http } from "#widgets"';
const HTTP_INSTANCE = 'Http.instance';

module.exports = {
  API_VERSION_KEY,
  API_VERSION_VALUE,
  COLLECTION_POSTFIX,
  HTTP_INSTANCE,
  HTTP_INSTANCE_IMPORT,
  PACKAGE_JSON_PATH,
  POSTMAN_LOCAL_PATH,
  SERVER_URL
};
