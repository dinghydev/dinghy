import z from 'zod'
import {
  RecordSchema,
  resolvable,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableStringSchema,
  StringOrArraySchema,
} from './base.ts'

const DisplayValues = {
  invisible:
    `The shape itself is invisible but it's children are rendered as normal`,
  none: `The shape and it's children are not displayed`,
  inactive: 'Border or edge is rendered as dashed lines',
  entity:
    'Force the shape to be treated as an entity, all children will be hidden',
}

/**
# Diagrams

Diagram specific attributes

## DisplaySchema

 */
export const DisplaySchema = z
  .enum(Object.keys(DisplayValues) as [keyof typeof DisplayValues])
  .meta({
    description:
      'Control on how shape to be displayed. See [example](/examples/diagrams/basic/display)',
    enumDescription: DisplayValues,
  })
export type DisplayType = z.output<typeof DisplaySchema>

/**
## ArrowSchema
 */
export const ArrowSchema = z
  .enum(['end', 'start', 'both', 'none'])
  .meta({
    description:
      'Dependency arrow styles. See [example](/examples/diagrams/basic/arrow)',
  })
export type ArrowType = z.output<typeof ArrowSchema>

/**
## AlignSchema
 */
export const AlignSchema = z.enum(['left', 'center', 'right'])
  .meta({
    description:
      'Horizontal alignment control. See [example](/examples/diagrams/basic/align)',
  })
export type AlignType = z.output<typeof AlignSchema>

/**
## VerticalAlignSchema
 */
export const VerticalAlignSchema = z.enum(['top', 'middle', 'bottom'])
  .meta({
    description:
      'Vertical alignment control. See [example](/examples/diagrams/basic/align)',
  })
export type VerticalAlignType = z.output<typeof VerticalAlignSchema>

/**
## DirectionSchema
 */
export const DirectionSchema = z.enum(['vertical', 'horizontal'])
  .meta({
    description:
      'Direction of children layout. Default is horizontal for container shapes. See [example](/examples/diagrams/basic/direction)',
  })
export type DirectionType = z.output<typeof DirectionSchema>

/**
## SpaceSchema

*/
export const SpaceSchema = z.object({
  top: z.number().default(15).describe('Top space in pixels'),
  bottom: z.number().default(15).describe('Bottom space in pixels'),
  left: z.number().default(15).describe('Left space in pixels'),
  right: z.number().default(15).describe('Right space in pixels'),
}).meta({ hideRequired: true, description: 'Margin/padding for the shape' })

/**
## DiagramNodeSchema

Diagram attributes to control the visual.

 */
export const DiagramNodeSchema = z.object({
  _color: ResolvableStringSchema.optional().describe(
    'Set shape strokeColor and fontColor all together. See [example](/examples/diagrams/basic/color)',
  ),
  _background: ResolvableStringSchema.optional().describe(
    'Background fillColor for the shape. See [example](/examples/diagrams/basic/color)',
  ),
  _width: ResolvableNumberSchema.optional().describe(
    'Width of the shape. See [example](/examples/diagrams/basic/legend)',
  ),
  _height: ResolvableNumberSchema.optional().describe(
    'Height of the shape. See [example](/examples/diagrams/basic/legend)',
  ),
  _x: ResolvableNumberSchema.optional().describe(
    'X position of the shape for absolute layout. See [example](/examples/diagrams/basic/legend)',
  ),
  _y: ResolvableNumberSchema.optional().describe(
    'Y position of the shape for absolute layout. See [example](/examples/diagrams/basic/legend)',
  ),
  _margin: SpaceSchema.optional(),
  _padding: SpaceSchema.optional(),
  _display: DisplaySchema.optional(),
  _distributed: ResolvableBooleanSchema.optional().describe(
    'Children are distributed evenly within a container when there is extra space by default. However dependency layout algorithms may change this behavior. This attribute will prevent shape to be moved by dependency layout algorithms.',
  ),
  _direction: z
    .union([DirectionSchema, resolvable(z.string())])
    .optional(),
  _align: z.union([AlignSchema, resolvable(z.string())]).optional(),
  _verticalAlign: z
    .union([VerticalAlignSchema, resolvable(z.string())])
    .optional(),
  _arrow: z.union([ArrowSchema, resolvable(z.string())]).optional(),
  _image: ResolvableStringSchema.optional().describe(
    'Image URL or base64 encoded string for the entitiy. See [example](/examples/diagrams/basic/image)',
  ),
  _mxGraphModel: ResolvableStringSchema.optional().describe(
    'To extract the style from mxGraphModel XML string which you can copy from drawio diagram for easy customization. See [example](/examples/diagrams/basic/mx-graph-model)',
  ),
  _view: StringOrArraySchema.optional().describe(
    `Nodes visibility will be decided by the activated view(s). Parent value are passed down to children automatically. See [example](/examples/diagrams/basic/view)`,
  ),
  _style: z.any().optional().describe(
    'Flexible style attribute to customize the shape as drawio mxCell style attriburte. See [example](/examples/diagrams/basic/style)',
  ),
  _diagram: RecordSchema.optional().describe(
    'Base for all other diagram configuration to be builded upon. Not recommended to use for general purpose, only use it programmatically.',
  ).meta({ hidden: true }),
}).meta({ hideRequired: true, hideDefault: true })

export type DiagramNodeType = z.input<typeof DiagramNodeSchema>
