import type { ReactNode } from "react";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import type { HostContainer, Output } from "./types.ts";
import { ZodError } from "zod";
import { nodeReconciler } from "./nodeReconciler.ts";
import { utils } from "@reactiac/base-components";

const debug = utils.createDebugger("core");

export function renderNode<T, P>(
  container: HostContainer<T, P>,
  reactNode: ReactNode,
) {
  debug("renderNode container options %o", container.renderOptions);
  (container as any).views ??= [];
  (container as any).stages ??= [];
  return new Promise<Output<T>>((resolve, reject) => {
    const fiberRootNode: any = nodeReconciler.createContainer(
      container as any,
      ConcurrentRoot,
      null,
      false,
      null,
      "",
      (e: Error) => {
        if (e instanceof ZodError) {
          console.log("ZodError", e.toString());
        }
        reject(e);
      },
      null,
    );
    nodeReconciler.updateContainer(reactNode, fiberRootNode, null, () => {
      if (container.rootElement) {
        const output = container.callback
          ? container.callback(container)
          : container;
        debug("renderNode output %o", output);
        resolve(output);
      }
    });
  });
}
