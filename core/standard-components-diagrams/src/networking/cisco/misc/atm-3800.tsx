import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATM_3800 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.atm_3800;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 67,
  _original_height: 75,
}

export function Atm3800(props: DiagramNodeProps) {
  return (
    <Shape {...ATM_3800} {...props} _style={extendStyle(ATM_3800, props)} />
  )
}
