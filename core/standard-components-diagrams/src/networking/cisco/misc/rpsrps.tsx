import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RPSRPS = {
  _style:
    'shape=mxgraph.cisco.misc.rpsrps;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 51,
}

export function Rpsrps(props: DiagramNodeProps) {
  return <Shape {...RPSRPS} {...props} _style={extendStyle(RPSRPS, props)} />
}
