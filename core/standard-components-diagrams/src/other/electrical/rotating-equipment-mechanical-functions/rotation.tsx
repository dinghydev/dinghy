import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROTATION = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.rot_mech.rotation;',
  _width: 69,
  _height: 54,
}

export function Rotation(props: DiagramNodeProps) {
  return (
    <Shape {...ROTATION} {...props} _style={extendStyle(ROTATION, props)} />
  )
}
