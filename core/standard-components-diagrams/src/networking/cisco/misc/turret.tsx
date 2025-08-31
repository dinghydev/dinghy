import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TURRET = {
  _style:
    'shape=mxgraph.cisco.misc.turret;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 165,
  _height: 66,
}

export function Turret(props: DiagramNodeProps) {
  return <Shape {...TURRET} {...props} _style={extendStyle(TURRET, props)} />
}
