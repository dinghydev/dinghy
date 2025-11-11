import type { ReactNode } from 'react'
import z from 'zod'
import { BaseNodeType } from './base.ts'
import { DiagramNodeType } from './diagrams.ts'
import { IacNodeType } from './iac.ts'

export type ReactNodeTree = {
  children?: ReactNode
  key?: any
  ref?: any
  _node?: NodeTree
  _dependsOn?: string | string[]
  _dependsBy?: string | string[]
}
export type Renderer = (node: ReactNodeTree) => ReactNode

//TODO: convert to schema instead of enum in base
export const DependsSchema = z.enum(['_dependsOn', '_dependsBy'])
export type DependsType = z.output<typeof DependsSchema>

export type NodeProps =
  & BaseNodeType
  & IacNodeType
  & DiagramNodeType
  & ReactNodeTree
  & Record<string, unknown>

export type NodeTree = {
  _parent?: NodeTree
  _children: NodeTree[]
  _props: NodeProps

  _dependsOn?: NodeTree[]
  _dependsBy?: NodeTree[]
}

export type DependencyProps = {
  _source: NodeTree
  _target: NodeTree
} & NodeProps
