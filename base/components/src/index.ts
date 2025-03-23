export { default as Shape } from './components/Shape.js'
export { Container } from './components/Container.js'
export { default as Resource } from './components/Resource.js'
export { default as Dependency } from './components/Dependency.js'
export { default as Stack, useStack } from './components/Stack.js'
export { useRenderOptions } from './contexts/useRenderOptions.js'
export {
  mergeStackOptions,
  parseStacks,
} from './utils/stackUtils.js'
export { createDebugger } from './utils/debugUtils.js'
export type { DiagramNodeProps, IacNodeProps, NodeProps } from './types.js'
export {
  DependsSchema,
  DiagramNodeSchema,
  NodeSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
  IacNodeSchema,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  StringSchema,
  type NodeTree,
  type Props,
  type Item,
  type Stack as StackType,
  type DisplayStringType,
} from './types.js'

export { RootNode } from './contexts/NodeContext.js'
export { utils } from './utils/index.js'
export { useTypedNode, useTypedNodes } from './contexts/useTypedNode.js'
import pkg from '../package.json' with { type: 'json' }
export const version = pkg.version
