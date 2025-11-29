import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MECHANICAL_TURK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mechanical_turk;fillColor=#ACACAC;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function MechanicalTurk(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MECHANICAL_TURK)} />
}
