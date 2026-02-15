import type { ReactNode } from 'react'
import { ConcurrentRoot } from 'react-reconciler/constants.js'
import type { HostContainer, Output } from './types.ts'
import { ZodError } from 'zod'
import { nodeReconciler } from './nodeReconciler.ts'
import { createDebugger } from '@dinghy/base-components'
import { applyProcessors } from './processors/index.ts'

const debug = createDebugger('base-render:renderNode')

async function applyProcessorsAndCallback<T, P>(
  container: HostContainer<T, P>,
): Promise<Output<T>> {
  await applyProcessors(container)
  if (container.applyProcessors) {
    container.rootElement = await container.applyProcessors(container)
  }
  const output = container.callback
    ? await container.callback!(container)
    : container
  return output as Output<T>
}

export function renderNode<T, P>(
  container: HostContainer<T, P>,
  reactNode: ReactNode,
) {
  debug('renderNode container options %O', container.renderOptions)
  ;(container as any).views ??= []
  return new Promise<Output<T>>((resolve, reject) => {
    const fiberRootNode: any = nodeReconciler.createContainer(
      container as any,
      ConcurrentRoot,
      null,
      false,
      null,
      '',
      (e: Error) => {
        if (e instanceof ZodError) {
          console.error('ZodError', e.toString())
        }
        reject(e)
      },
      null,
    )
    nodeReconciler.updateContainer(reactNode, fiberRootNode, null, () => {
      if (container.rootElement) {
        resolve(applyProcessorsAndCallback(container))
      }
    })
  })
}
