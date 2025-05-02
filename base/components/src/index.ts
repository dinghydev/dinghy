export { Shape } from './components/Shape.tsx'
export { Container } from './components/Container.tsx'
export { Resource } from './components/Resource.tsx'
export { Dependency } from './components/Dependency.tsx'
export { Stack, useStack } from './components/Stack.tsx'
export {
  useRenderOptions,
  useRenderOptionsStack,
} from './contexts/useRenderOptions.tsx'
export {
  createStack,
  loadFile,
  loadFilesData,
  mergeStackOptions,
  parseStack,
} from './utils/stackUtils.ts'
export { getRootNode } from './utils/nodeUtils.ts'
export { createDebugger } from './utils/debugUtils.ts'
export type { DiagramNodeProps, IacNodeProps, NodeProps } from './types.ts'
export {
  DependsSchema,
  DiagramNodeSchema,
  type DisplayStringType,
  IacNodeSchema,
  type Item,
  NodeSchema,
  type NodeTree,
  type Props,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
  type Stack as StackType,
  StringSchema,
} from './types.ts'

export { RootNode } from './contexts/NodeContext.tsx'
export { utils } from './utils/index.ts'
export { useTypedNode, useTypedNodes } from './contexts/useTypedNode.tsx'
export { deepResolve } from './utils/deepResolve.ts'
