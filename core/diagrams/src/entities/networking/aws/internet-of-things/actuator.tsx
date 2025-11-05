import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTUATOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.actuator;',
  },
  _original_width: 72,
  _original_height: 78,
}

export function Actuator(props: NodeProps) {
  return (
    <Shape {...ACTUATOR} {...props} _style={extendStyle(ACTUATOR, props)} />
  )
}
