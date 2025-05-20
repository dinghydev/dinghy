import type { ReactElement, ReactNode } from 'react'
import z, { type ZodType, type ZodTypeAny } from 'zod'

export const resolvable = <T extends ZodTypeAny>(_schema: T): ZodType<T> =>
  z.function().args(z.any()).returns(z.any()) as unknown as ZodType<T>

export const resolvableValue = <T extends z.ZodTypeAny>(schema: T) =>
  z.union([
    schema,
    resolvable(schema),
    z.function().args(z.any()).returns(z.any()),
  ])

export const StringSchema = z.string()

export const ResolvableStringSchema = resolvableValue(z.string())
export const ResolvableStringArraySchema = z.union([
  z.string().array(),
  ResolvableStringSchema.array(),
  resolvable(ResolvableStringSchema.array()),
])
export const StringOrArraySchema = z.union([z.string(), z.string().array()])

export const ResolvableNumberSchema = resolvableValue(z.number())

export const ResolvableBooleanSchema = resolvableValue(z.boolean())

export const CallableSchema = resolvable(z.any())
export type CallableType = z.input<typeof CallableSchema>

export const RecordSchema = z.record(z.string(), z.unknown())

export const ResolvableRecordSchema = resolvableValue(
  z.record(z.string(), z.unknown()),
)

export interface Props {
  [key: string]: unknown
}

export type ReactNodeTree = {
  children?: ReactNode
  _node?: NodeTree
  _dependsOn?: string | string[]
  _dependsBy?: string | string[]
  // [Object.keys(DependsSchema.enum)]?: string | string[]
} // & ReactNode
//& Props

export type Renderer = (node: ReactNodeTree) => ReactNode

export const DependsSchema = z.enum(['_dependsOn', '_dependsBy'])
export type DependsType = z.input<typeof DependsSchema>

export type NodeTree = {
  _parent?: NodeTree
  _children: NodeTree[]
  _props: NodeProps

  _dependsOn?: NodeTree[]
  _dependsBy?: NodeTree[]
}

export const NodeSchema = z.object({
  // react props
  key: z.any().optional(),
  ref: z.any().optional(),

  // reactiac core props
  title: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
  _title: ResolvableStringSchema.optional(),
  _name: ResolvableStringSchema.optional(),
  _id: ResolvableStringSchema.optional(),

  // reactiac additional props
  _level: ResolvableNumberSchema.optional(),
  _tags: ResolvableStringArraySchema.optional(),
  _type: ResolvableStringSchema.optional(),
  _isDependency: ResolvableBooleanSchema.optional(),
  _version: ResolvableStringSchema.optional(),
  _view: StringOrArraySchema.optional(),
  _stage: StringOrArraySchema.optional(),
  _importId: ResolvableStringSchema.optional(),
})

export type NodeType = z.input<typeof NodeSchema>
export type NodeProps = NodeType & ReactNodeTree

export const DisplayStringSchema = z.enum([
  'invisible',
  'none',
  'inactive',
  'entity',
])
export type DisplayStringType = z.input<typeof DisplayStringSchema>

export const ArrowStringSchema = z.enum(['end', 'start', 'both', 'none'])
export type ArrowStringType = z.input<typeof ArrowStringSchema>

export const DistributionStringSchema = z.enum([
  'even',
  'horizontal',
  'vertical',
])
export type DistributionStringType = z.input<typeof DistributionStringSchema>

export const AlignSchema = z.enum(['left', 'center', 'right'])
export type AlignType = z.input<typeof AlignSchema>

export const VerticalAlignSchema = z.enum(['top', 'middle', 'bottom'])
export type VerticalAlignType = z.input<typeof VerticalAlignSchema>

export const DiagramNodeSchema = z.object({
  _diagram: RecordSchema.optional(),
  _style: ResolvableRecordSchema.optional(),
  _shape: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      entity: z.string().optional(),
      group: z.string().optional(),
    }),
  ]),
  _icon: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      entity: z.string().optional(),
      group: z.string().optional(),
    }),
  ]),
  _color: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      color: z.string().optional(),
      fill: z.boolean().default(false).optional(),
    }),
  ]),
  _background: ResolvableStringSchema.optional(),
  _border: ResolvableNumberSchema.optional(),
  _width: ResolvableNumberSchema.optional(),
  _height: ResolvableNumberSchema.optional(),
  _dashed: ResolvableBooleanSchema.optional(),
  _display: z.union([DisplayStringSchema, resolvable(z.string())]).optional(),
  _arrow: z.union([ArrowStringSchema, resolvable(z.string())]).optional(),
  _distribution: z
    .union([DistributionStringSchema, resolvable(z.string())])
    .optional(),
  _direction: z
    .union([z.enum(['vertical', 'horizontal']), resolvable(z.string())])
    .optional(),
  _align: z.union([AlignSchema, resolvable(z.string())]).optional(),
  _verticalAlign: z
    .union([VerticalAlignSchema, resolvable(z.string())])
    .optional(),
  _image: ResolvableStringSchema.optional(),
  _mxGraphModel: ResolvableStringSchema.optional(),
  _beforeGenerate: CallableSchema.optional(),
})

export type DiagramNodeType = z.input<typeof DiagramNodeSchema>
export type DiagramNodeProps = DiagramNodeType & NodeProps

export type DependencyProps = {
  _source: NodeTree
  _target: NodeTree
} & DiagramNodeProps

// Terraform / OpenTofu types
export const IacCategorySchema = z.enum([
  'resource',
  'data',
  'terraform',
  'provider',
  'none',
])

export const IacNodeSchema = z.object({
  _inputSchema: z.instanceof(z.ZodType).optional(),
  _outputSchema: z.instanceof(z.ZodType).optional(),
  _stackResource: ResolvableBooleanSchema.optional(),
  _resource: RecordSchema.optional(),
  _data: RecordSchema.optional(),
  _terraform: RecordSchema.optional(),
  _provider: RecordSchema.optional(),
  _category: z.union([IacCategorySchema, resolvable(z.string())]).optional(),
})

export type IacNodeType = z.input<typeof IacNodeSchema>
export type IacNodeProps = IacNodeType & DiagramNodeProps
