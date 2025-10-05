import z from 'zod'
import {
  CallableSchema,
  NodeProps,
  NodeTree,
  RecordSchema,
  resolvable,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from './base.ts'

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
  _style: z.union([
    ResolvableStringSchema.optional(),
    z.any().array().optional(),
    z.object({
      element: z.union([
        ResolvableStringSchema.optional(),
        z.record(z.string(), z.any()),
      ]),
      entity: z.union([
        ResolvableStringSchema.optional(),
        z.record(z.string(), z.any()),
      ]),
      container: z.union([
        ResolvableStringSchema.optional(),
        z.record(z.string(), z.any()),
      ]),
      dependency: z.union([
        ResolvableStringSchema.optional(),
        z.record(z.string(), z.any()),
      ]),
    }),
  ]),
  _color: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      color: z.string().optional(),
      fill: z.boolean().default(false).optional(),
    }),
  ]),
  _width: ResolvableNumberSchema.optional(),
  _height: ResolvableNumberSchema.optional(),
  _x: ResolvableNumberSchema.optional(),
  _y: ResolvableNumberSchema.optional(),
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
  // rest are deprecated
  _background: ResolvableStringSchema.optional(),
  _border: ResolvableNumberSchema.optional(),
  _dashed: ResolvableBooleanSchema.optional(),
  _shape: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      entity: z.string().optional(),
      container: z.string().optional(),
    }),
  ]),
  _icon: z.union([
    ResolvableStringSchema.optional(),
    z.object({
      entity: z.string().optional(),
      container: z.string().optional(),
    }),
  ]),
})

export type DiagramNodeType = z.input<typeof DiagramNodeSchema>
export type DiagramNodeProps = DiagramNodeType & NodeProps

export type DependencyProps = {
  _source: NodeTree
  _target: NodeTree
} & DiagramNodeProps
