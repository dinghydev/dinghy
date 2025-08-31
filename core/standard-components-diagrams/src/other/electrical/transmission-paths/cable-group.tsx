import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CABLE_GROUP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.cable_group;pointerEvents=1;',
  _width: 130,
  _height: 130,
}

export function CableGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...CABLE_GROUP}
      {...props}
      _style={extendStyle(CABLE_GROUP, props)}
    />
  )
}
