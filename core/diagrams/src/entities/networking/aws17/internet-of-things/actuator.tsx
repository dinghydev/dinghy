import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTUATOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.actuator;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function Actuator(props: DiagramNodeProps) {
  return (
    <Shape {...ACTUATOR} {...props} _style={extendStyle(ACTUATOR, props)} />
  )
}
