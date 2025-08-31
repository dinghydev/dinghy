import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_CENTER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.control_center;',
  _width: 60,
  _height: 60,
}

export function ControlCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_CENTER}
      {...props}
      _style={extendStyle(CONTROL_CENTER, props)}
    />
  )
}
