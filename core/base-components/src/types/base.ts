import type { ReactNode } from 'react'
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

export const CallableSchema = z.function().args(z.any()).returns(z.any())
export type CallableType = z.input<typeof CallableSchema>

export const RecordSchema = z.record(z.string(), z.unknown())

export const ResolvableRecordSchema = resolvableValue(
  z.record(z.string(), z.unknown()),
)

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

  // dinghy core props
  title: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
  _title: ResolvableStringSchema.optional(),
  _name: ResolvableStringSchema.optional(),
  _id: ResolvableStringSchema.optional(),

  // dinghy additional props
  _level: ResolvableNumberSchema.optional(),
  _tags: ResolvableStringArraySchema.optional(),
  _type: ResolvableStringSchema.optional(),
  _isDependency: ResolvableBooleanSchema.optional(),
  _version: ResolvableStringSchema.optional(),
  _view: StringOrArraySchema.optional(),
  _stage: StringOrArraySchema.optional(),
  _importId: ResolvableStringSchema.optional(),
  onDataBind: CallableSchema.optional(),
})

export type NodeType = z.input<typeof NodeSchema>
export type NodeProps = NodeType & ReactNodeTree
