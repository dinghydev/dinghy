import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATTRIBUTE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.attribute;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 66,
}

export function Attribute(props: NodeProps) {
  return (
    <Shape {...ATTRIBUTE} {...props} _style={extendStyle(ATTRIBUTE, props)} />
  )
}
