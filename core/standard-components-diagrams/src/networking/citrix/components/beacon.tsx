import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEACON = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.beacon;',
  _width: 35.04,
  _height: 50,
}

export function Beacon(props: DiagramNodeProps) {
  return <Shape {...BEACON} {...props} _style={extendStyle(BEACON, props)} />
}
