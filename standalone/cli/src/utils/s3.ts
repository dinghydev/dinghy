import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

import Debug from "debug";
const debug = Debug("aws:s3");

export const s3WriteString = async (
  region: string,
  Bucket: string,
  Key: string,
  Body: string,
  options = {},
) => {
  const s3Command = new PutObjectCommand({
    ...options,
    Bucket,
    Key,
    Body,
  });
  debug("upload s3://%s/%s request", Bucket, Key);
  const s3Response = await s3Client(region).send(s3Command);
  debug("upload response", s3Response);
};

export const s3GetFile = async (
  region: string,
  Bucket: string,
  Key: string,
) => {
  const s3Command = new GetObjectCommand({
    Bucket,
    Key,
  });
  debug("download s3://%s/%s request", Bucket, Key);
  const s3Response = await s3Client(region).send(s3Command);
  const body = await s3Response.Body!.transformToString("utf-8");
  debug("download response: %s", body);
  return body;
};

const temporaryStorageBucket = () => {
  const region = Deno.env.get("TEMPORARY_STORAGE_REGION");
  const bucket = Deno.env.get("TEMPORARY_STORAGE_BUCKET");
  if (!region || !bucket) {
    debug(
      "TEMPORARY_STORAGE_REGION or TEMPORARY_STORAGE_BUCKET is not set",
    );
    return { region: null, bucket: null };
  }
  return { region, bucket };
};

export const temporaryStorageGetFile = async (key: string) => {
  const { region, bucket } = temporaryStorageBucket();
  if (!region || !bucket) {
    return null;
  }
  try {
    return await s3GetFile(region, bucket, key);
  } catch (e) {
    debug("Failed to get temporary storage file %s", key, e);
    return null;
  }
};

export const temporaryStorageSaveFile = async (key: string, body: string) => {
  const { region, bucket } = temporaryStorageBucket();
  if (!region || !bucket) {
    return null;
  }
  return await s3WriteString(region, bucket, key, body);
};

const s3Client = (region: string) => {
  return new S3Client({ region });
};
