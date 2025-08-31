import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BTS_10200 = {
  _style:
    'shape=mxgraph.cisco.misc.bts_10200;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 50,
  _height: 75,
}

export function Bts10200(props: DiagramNodeProps) {
  return (
    <Shape {...BTS_10200} {...props} _style={extendStyle(BTS_10200, props)} />
  )
}
