import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NODE_GENERIC_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.node_generic;fillColor=#DA4026;',
  },
  _original_width: 46,
  _original_height: 52,
}

export function NodeGenericOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...NODE_GENERIC_ORANGE}
      {...props}
      _style={extendStyle(NODE_GENERIC_ORANGE, props)}
    />
  )
}
