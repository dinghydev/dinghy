import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AXP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.axp;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 74,
}

export function Axp(props: DiagramNodeProps) {
  return <Shape {...AXP} {...props} _style={extendStyle(AXP, props)} />
}
