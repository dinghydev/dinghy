import { z } from "zod";
import { loadFilesData, useRenderOptions } from "@reactiac/base-components";
import Debug from "debug";
const debug = Debug("useWafConfig");

const WafActionSchema = z.object({
  pathRegex: z.string().optional(),
  action: z.enum(["COUNT", "BLOCK", "ALLOW"]),
  blockedStatusCode: z.number(),
});

const BodySizeLimitSchema = WafActionSchema.extend({
  sizeInMb: z.number().default(10),
  action: z.enum(["COUNT", "BLOCK"]).default("BLOCK"),
  blockedStatusCode: z.number().default(413),
});

const IpRateLimitSchema = WafActionSchema.extend({
  rate: z.number().default(1000),
  window: z.number().default(300),
  action: z.enum(["COUNT", "BLOCK"]).default("COUNT"),
  blockedStatusCode: z.number().default(429),
});

const WafConfigSchema = z.object({
  allowedIpList: z.string().array().optional(),
  blockedIpList: z.string().array().optional(),
  hostKeyword: z.string().optional(),
  logBucket: z.string(),
  blockedIpStatusCode: z.number().default(451),
  bodySizeLimits: z.record(z.string(), BodySizeLimitSchema),
  ipRateLimits: z.record(z.string(), IpRateLimitSchema),
});

export type WafAction = z.infer<typeof WafActionSchema>;
export type WafConfig = z.infer<typeof WafConfigSchema>;

const loadIpList = (
  renderOptions: any,
  inputData: any,
  type: "blocked" | "allowed",
) => {
  const key = `${type}IpList`;
  const ipList = inputData[key] ?? (inputData[key] = []);

  const listFile = `${type}-ip-list.yaml`;
  const listData = renderOptions.files?.config?.waf?.files[listFile];
  if (listData) {
    ipList.push(...listData);
    debug("loaded %s", listFile);
  }
};

export function useWafConfig(name: string) {
  const { renderOptions } = useRenderOptions();
  const inputData = loadFilesData(
    renderOptions,
    "config/waf",
    name,
  );

  loadIpList(renderOptions, inputData, "blocked");
  loadIpList(renderOptions, inputData, "allowed");

  const config = WafConfigSchema.passthrough().parse(inputData);
  debug("loaded waf config %O", config);
  return { config };
}
