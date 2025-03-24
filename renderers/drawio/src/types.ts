import type { ReactElement } from 'react'
import type {
  DiagramNodeProps,
  NodeTree,
  Props,
} from '@reactiac/base-components'
import z from 'zod'

export type DrawioRenderOptions = {
  diagramOptions?: {
    dimension?: Partial<DimensionDefaultProps>
  }
}

export type ElementProps = {
  style: Props
} & Props

export type DimensionDefaultProps = {
  boxWidth: number
  boxHeight: number
  textHeight: number
  spaceX: number
  spaceY: number
  spaceBetweenX: number
  spaceBetweenY: number
}

export type Point = {
  x: number
  y: number
}

export type DrawioProps = {
  element: ElementProps
  entity: Props
  group: Props
  dependency: Props
  geometry: Props
  points: Point[]
  dimension: DimensionDefaultProps

  flags: {
    isDirectionVertical: boolean
    isHidden: boolean
    isEntity: boolean
    isTextOutside: boolean
    sameDimension: boolean
    distribution: string
    arrowDirection: string
    isArrowVertical: boolean
    isFixedWidth: boolean
    isFixedHeight: boolean
  }
  state: {
    width: number
    height: number
    moveableRight: number
    moveableBottom: number
  }
} & Props

export type DrawioNodeProps = {
  _node: DrawioNodeTree
  _diagram: DrawioProps
  _dependsOn?: DrawioNodeTree[]
  _dependsBy?: DrawioNodeTree[]
} & DiagramNodeProps

export type DrawioNodeTree = {
  _parent: DrawioNodeTree
  _children: DrawioNodeTree[]
  _props: DrawioNodeProps

  _dependsOn?: DrawioNodeTree[]
  _dependsBy?: DrawioNodeTree[]
} & NodeTree

export type DrawioContext = {
  renderOptions: DrawioRenderOptions
  rootNode: DrawioNodeTree
  dependencies: DrawioNodeTree[]
  rootElements: ReactElement[]
  mxfileElement: ReactElement
  dependsPairs: DependsPair[]
}

export type Processor = (context: DrawioContext) => void

export const DependsSchema = z.enum(['_dependsOn', '_dependsBy'])
export type DependsType = z.input<typeof DependsSchema>

export type DependsPair = {
  single: DrawioNodeTree
  list: DrawioNodeTree[]
  relationships: DrawioNodeTree[]
  all: DrawioNodeTree[]
}

export const DimensionSchema = z.enum(['width', 'height'])
export type DimensionType = z.input<typeof DimensionSchema>

export const DirectionSchema = z.enum(['horizontal', 'vertical'])
export type DirectionType = z.input<typeof DirectionSchema>

export const ArrowDirectionSchema = z.enum(['left', 'right', 'up', 'down'])
export type ArrowDirectionType = z.input<typeof ArrowDirectionSchema>

export const DependencyFieldsSchema = z.enum(['_source', '_target'])
