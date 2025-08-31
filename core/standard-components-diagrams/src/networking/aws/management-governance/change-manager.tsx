import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_MANAGER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.systems_manager_change_manager;',
  },
  _width: 78,
  _height: 72,
}

export function ChangeManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_MANAGER}
      {...props}
      _style={extendStyle(CHANGE_MANAGER, props)}
    />
  )
}
