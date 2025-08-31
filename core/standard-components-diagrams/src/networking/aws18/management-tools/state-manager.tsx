import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_MANAGER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.state_manager;',
  _width: 60,
  _height: 60,
}

export function StateManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...STATE_MANAGER}
      {...props}
      _style={extendStyle(STATE_MANAGER, props)}
    />
  )
}
