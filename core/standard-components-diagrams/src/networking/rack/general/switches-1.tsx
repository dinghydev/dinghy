import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCHES_1 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.switches_1;',
  _width: 160,
  _height: 30,
}

export function Switches1(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCHES_1} {...props} _style={extendStyle(SWITCHES_1, props)} />
  )
}
