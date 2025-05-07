import { execCmd } from "./cmd.ts";
import { hostAppHome } from "./loadConfig.ts";
import Debug from "debug";
import { projectVersion } from "./projectVersion.ts";
import { dublinTimeNow } from "./timeUtils.ts";
import { temporaryStorageGetFile, temporaryStorageSaveFile } from "./s3.ts";
const debug = Debug("gitUtils");
export const mrId = () => Deno.env.get("CI_MERGE_REQUEST_IID");

export const isMr = () => mrId() !== undefined;
export const jobName = () =>
  Deno.env.get("CI_JOB_NAME") || `reactiac ${Deno.args.join(" ")}`;
const projectId = () => Deno.env.get("CI_PROJECT_ID");

let _projectName: string | undefined;
export const projectName = async (): Promise<string> => {
  if (_projectName) {
    return _projectName;
  }
  let project = Deno.env.get("CI_PROJECT_PATH");
  try {
    if (!project) {
      const originUrl = await execCmd("git remote get-url origin");
      const splitIndex = originUrl.startsWith("git")
        ? originUrl.indexOf(":")
        : originUrl.indexOf("/", 10);

      debug(`project git originUrl: ${originUrl}`);
      project = originUrl!.slice(splitIndex + 1, originUrl.lastIndexOf(".git"));
    }

    project = project!.slice(project!.indexOf("/") + 1);
  } catch {
    project = hostAppHome.split("/").pop();
  }
  debug(`inited project name: ${project}`);
  _projectName = project;
  return project!;
};

export const projectDeployThread = async (): Promise<string> => {
  return `projects/${await projectName()}/slack_threads/deploy/${
    Deno.args[2] || "auto"
  }/${projectVersion}`;
};

const gitlabMrNoteKey = (name: string, iid: string, type: string) => {
  return `projects/${name}/gitlab_mr_note/${iid}/${
    dublinTimeNow().split(" ")[0]
  }/${type}`;
};

const gitlabMrNoteUpdateById = async (
  iid: string,
  body: string,
  noteId: string,
) => {
  debug("get gitlab project %s mr edit note for %s:%s", iid, noteId);
  const token = Deno.env.get("GITLAB_API_TOKEN");
  const url = `${
    Deno.env.get("CI_SERVER_URL") || "https://gitlab.com"
  }/api/v4/projects/${projectId()}/merge_requests/${iid}/notes/${noteId}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "PRIVATE-TOKEN": token!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body,
    }),
  });
  debug("get gitlab project mr edit note response %O", debugResponse(response));

  if (!response.ok) {
    throw new Error(`Failed to update MR note: ${response.statusText}`);
  }

  return response;
};

const gitlabMrNoteCreate = async (
  iid: string,
  body: string,
  key?: string,
) => {
  debug("get gitlab project mr create note for %s", iid);
  const token = Deno.env.get("GITLAB_API_TOKEN");
  const url = `${
    Deno.env.get("CI_SERVER_URL") || "https://gitlab.com"
  }/api/v4/projects/${projectId()}/merge_requests/${iid}/notes`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "PRIVATE-TOKEN": token!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: body,
    }),
  });
  debug(
    "get gitlab project mr create note response %O",
    debugResponse(response),
  );

  if (!response.ok) {
    throw new Error(`Failed to create MR note: ${response.statusText}`);
  }

  const responseBody = await response.json();
  if (key) {
    await temporaryStorageSaveFile(key, responseBody.id.toString());
  }

  return response;
};

const gitlabPipelineJobs = async (pipelineId: string) => {
  debug("get gitlab project pipeline %s jobs", pipelineId);

  const token = Deno.env.get("GITLAB_API_TOKEN");
  const url = `${
    Deno.env.get("CI_SERVER_URL") || "https://gitlab.com"
  }/api/v4/projects/${projectId()}/pipelines/${pipelineId}/jobs?include_retried=true&per_page=100`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "PRIVATE-TOKEN": token!,
      "Content-Type": "application/json",
    },
  });
  debug(
    "get gitlab project pipeline %s jobs response %O",
    pipelineId,
    debugResponse(response),
  );

  if (!response.ok) {
    throw new Error(
      `Failed to get gitlab project pipeline %s jobs: ${response.statusText}`,
    );
  }

  const responseBody = await response.json();
  return responseBody;
};

const debugResponse = (response: any) => {
  return {
    ok: response.ok,
    redirected: response.redirected,
    status: response.status,
    statusMessage: response.statusText,
    url: response.url,
  };
};

const gitlabPlayJob = async (id: number) => {
  debug("play gitlab project job %s", id);
  const token = Deno.env.get("GITLAB_API_TOKEN");
  const url = `${
    Deno.env.get("CI_SERVER_URL") || "https://gitlab.com"
  }/api/v4/projects/${projectId()}/jobs/${id}/play`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "PRIVATE-TOKEN": token!,
      "Content-Type": "application/json",
    },
  });
  debug("play gitlab project job response %O", debugResponse(response));
  if (!response.ok) {
    throw new Error(
      `Failed to play gitlab project job: ${response.statusText}`,
    );
  }
  return response;
};

export const attachChangeToMR = async (changes: any[]) => {
  const lines = [
    `## [${jobName()}](${
      Deno.env.get("CI_JOB_URL")
    }) detected changes in ${changes.length} stack${
      changes.length > 1 ? "s" : ""
    }`,
  ];
  for (const change of changes) {
    lines.push(
      `${change.id}: ${change.plan.summary}`,
      "```",
      ...change.plan.changes,
      "```",
    );
  }

  const markDown = lines.join("\n");
  debug("reactiac tf diff mark down: %s", markDown);

  const mrIid = mrId()!;
  const projectId = await projectName();
  const key = gitlabMrNoteKey(
    projectId,
    mrIid,
    jobName().split(" ").join("-"),
  );
  debug("gitlab mr note key: %s", key);
  const existingNoteId = await temporaryStorageGetFile(key);
  debug("gitlab mr note existingNoteId: %s", existingNoteId);
  await (existingNoteId
    ? gitlabMrNoteUpdateById(
      mrIid,
      markDown,
      existingNoteId,
    )
    : gitlabMrNoteCreate(mrIid, markDown, key));

  debug(
    `reactiac tf diff result ${
      existingNoteId ? "edited" : "attached"
    } for merge request ${mrIid}`,
  );
};

export const triggerAutoDeployJobs = async (stacks: any[], args: any) => {
  const pipelineJobs = await gitlabPipelineJobs(
    Deno.env.get("CI_PIPELINE_ID")!,
  );

  const namesCandidates: string[] = [];
  if (!args.stack) {
    namesCandidates.push("reactiac tf apply");
    namesCandidates.push("tf apply");
  }

  for (const stack of stacks) {
    const optionKey = `${isMr() ? "mr" : "main"}AutoDeploy`;
    if (stack[optionKey]) {
      namesCandidates.push(
        `tf diff ${stack.id}`,
        `tf apply ${stack.id}`,
        `reactiac tf diff ${stack.id}`,
        `reactiac tf apply ${stack.id}`,
      );
    }
  }

  for (const job of pipelineJobs) {
    if (namesCandidates.includes(job.name) && job.status === "manual") {
      console.log(`Triggering manual job ${job.name}`);
      await gitlabPlayJob(job.id);
    }
  }
};
