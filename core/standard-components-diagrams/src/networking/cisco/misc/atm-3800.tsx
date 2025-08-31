import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATM_3800 = {
  _style:
    'shape=mxgraph.cisco.misc.atm_3800;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 67,
  _height: 75,
}

export function Atm3800(props: DiagramNodeProps) {
  return (
    <Shape {...ATM_3800} {...props} _style={extendStyle(ATM_3800, props)} />
  )
}
