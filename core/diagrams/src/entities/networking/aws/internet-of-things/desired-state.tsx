import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESIRED_STATE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.desired_state;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function DesiredState(props: NodeProps) {
  return (
    <Shape
      {...DESIRED_STATE}
      {...props}
      _style={extendStyle(DESIRED_STATE, props)}
    />
  )
}
