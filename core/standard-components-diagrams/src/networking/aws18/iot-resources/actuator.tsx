import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTUATOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.actuator;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Actuator(props: DiagramNodeProps) {
  return (
    <Shape {...ACTUATOR} {...props} _style={extendStyle(ACTUATOR, props)} />
  )
}
