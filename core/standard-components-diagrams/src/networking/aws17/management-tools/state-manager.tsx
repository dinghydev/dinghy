import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_MANAGER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.state_manager;fillColor=#759C3E;gradientColor=none;',
  _width: 79.5,
  _height: 82.5,
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
