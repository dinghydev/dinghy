import type { ReactElement } from 'react'
import Reconciler from 'react-reconciler'
import {
  DefaultEventPriority,
  NoEventPriority,
} from 'react-reconciler/constants.js'
import type { HostContainer } from './types.ts'
import { applyFiberProcessors } from './fiber-processors/index.ts'

type EventPriority = number

const createReconciler = Reconciler as unknown as <
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  HydratableInstance,
  FormInstance,
  PublicInstance,
  HostContext,
  ChildSet,
  TimeoutHandle,
  NoTimeout,
  TransitionStatus,
>(
  config:
    & Omit<
      Reconciler.HostConfig<
        Type,
        Props,
        Container,
        Instance,
        TextInstance,
        SuspenseInstance,
        HydratableInstance,
        PublicInstance,
        HostContext,
        null, // updatePayload
        ChildSet,
        TimeoutHandle,
        NoTimeout
      >,
      'getCurrentEventPriority' | 'prepareUpdate' | 'commitUpdate'
    >
    & {
      /**
       * This method should mutate the `instance` and perform prop diffing if needed.
       *
       * The `internalHandle` data structure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
       */
      commitUpdate?(
        instance: Instance,
        type: Type,
        prevProps: Props,
        nextProps: Props,
        internalHandle: Reconciler.OpaqueHandle,
      ): void

      // Undocumented
      // https://github.com/facebook/react/pull/26722
      NotPendingTransition: TransitionStatus | null
      // https://github.com/facebook/react/pull/28751
      setCurrentUpdatePriority(newPriority: EventPriority): void
      getCurrentUpdatePriority(): EventPriority
      resolveUpdatePriority(): EventPriority
      // https://github.com/facebook/react/pull/28804
      resetFormInstance(form: FormInstance): void
      // https://github.com/facebook/react/pull/25105
      requestPostPaintCallback(callback: (time: number) => void): void
      // https://github.com/facebook/react/pull/26025
      shouldAttemptEagerTransition(): boolean

      /**
       * This method is called during _render to determine if the Host Component type and extend require some kind of loading process to complete before committing an update.
       */
      maySuspendCommit(type: Type, props: Props): boolean
      /**
       * This method may be called during _render if the Host Component type and extend might suspend a commit. It can be used to initiate any work that might shorten the duration of a suspended commit.
       */
      preloadInstance(type: Type, props: Props): boolean
      /**
       * This method is called just before the commit phase. Use it to set up any necessary state while any Host Components that might suspend this commit are evaluated to determine if the commit must be suspended.
       */
      startSuspendingCommit(): void
      /**
       * This method is called after `startSuspendingCommit` for each Host Component that indicated it might suspend a commit.
       */
      suspendInstance(type: Type, props: Props): void
      /**
       * This method is called after all `suspendInstance` calls are complete.
       *
       * Return `null` if the commit can happen immediately.
       *
       * Return `(initiateCommit: Function) => Function` if the commit must be suspended. The argument to this callback will initiate the commit when called. The return value is a cancellation function that the Reconciler can use to abort the commit.
       */
      waitForCommitToBeReady(): ((initiateCommit: any) => any) | null
    },
) => Reconciler.Reconciler<
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  PublicInstance
>

export interface HostConfig {
  type: string
  props: Record<string, unknown>
  container: HostContainer<unknown, unknown>
  instance: ReactElement
  textInstance: ReactElement
  suspenseInstance: ReactElement
  hydratableInstance: never
  formInstance: never
  publicInstance: null
  hostContext: Record<string | number | symbol, never>
  childSet: never
  timeoutHandle: number
  noTimeout: -1
  TransitionStatus: null
}

const NO_CONTEXT: HostConfig['hostContext'] = {}

const notImplemented = () => {
  throw new Error('not implemented')
}

let currentUpdatePriority: number = NoEventPriority

export const nodeReconciler = createReconciler<
  HostConfig['type'],
  HostConfig['props'],
  HostConfig['container'],
  HostConfig['instance'],
  HostConfig['textInstance'],
  HostConfig['suspenseInstance'],
  HostConfig['hydratableInstance'],
  HostConfig['formInstance'],
  HostConfig['publicInstance'],
  HostConfig['hostContext'],
  HostConfig['childSet'],
  HostConfig['timeoutHandle'],
  HostConfig['noTimeout'],
  HostConfig['TransitionStatus']
>({
  isPrimaryRenderer: false,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  createInstance: (
    type: any,
    originalProps: any,
    _container: HostContainer<unknown, unknown>,
    _hostContext: any,
    fiber: any,
  ): any => {
    const props = { ...originalProps, children: [] } as any
    if (props?._node?._props?.ref) {
      props._node._props.ref.current = props._node._props
    }
    return { type, props, fiber, key: null }
  },
  appendChildToContainer: (
    container: HostContainer<unknown, unknown>,
    rootElement: ReactElement,
  ) => {
    try {
      container.rootElement = rootElement
      applyFiberProcessors(container)
    } catch (e) {
      container.rootElement = null as any
      throw e
    }
  },
  removeChildFromContainer: (container: HostContainer<unknown, unknown>) => {
    container.rootElement = undefined
  },
  clearContainer: (container: HostContainer<unknown, unknown>) => {
    container.rootElement = undefined
  },
  hideInstance() {},
  unhideInstance() {},
  createTextInstance(text: string): any {
    return { type: 'text', props: { _title: text }, key: null }
  },
  hideTextInstance() {},
  unhideTextInstance() {},
  appendInitialChild: (parent: ReactElement, child: ReactElement): any => {
    ;(parent.props as any).children.push(child)
  },
  appendChild: notImplemented,
  insertBefore: notImplemented,
  removeChild: notImplemented,
  getPublicInstance: notImplemented,
  getRootHostContext: () => NO_CONTEXT,
  getChildHostContext: () => NO_CONTEXT,
  shouldSetTextContent: () => false,
  finalizeInitialChildren: () => false,
  commitUpdate: notImplemented,
  commitTextUpdate: notImplemented,
  prepareForCommit: () => null,
  resetAfterCommit() {},
  preparePortalMount() {},
  warnsIfNotActing: false,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur() {},
  detachDeletedInstance() {},
  prepareScopeUpdate() {},
  getInstanceFromScope: () => null,
  setCurrentUpdatePriority(newPriority) {
    currentUpdatePriority = newPriority
  },
  getCurrentUpdatePriority() {
    return currentUpdatePriority
  },
  resolveUpdatePriority() {
    return currentUpdatePriority || DefaultEventPriority
  },
  shouldAttemptEagerTransition() {
    return false
  },
  requestPostPaintCallback() {},
  maySuspendCommit() {
    return false
  },
  preloadInstance() {
    return true // true indicates already loaded
  },
  startSuspendingCommit() {},
  suspendInstance() {},
  waitForCommitToBeReady() {
    return null
  },
  NotPendingTransition: null,
  resetFormInstance() {},
})
