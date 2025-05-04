export const mrId = () => Deno.env.get("CI_MERGE_REQUEST_IID");

export const isMr = () => mrId() !== undefined;
