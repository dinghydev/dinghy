import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ics;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 70,
  _height: 77,
}

export function Ics(props: DiagramNodeProps) {
  return <Shape {...ICS} {...props} _style={extendStyle(ICS, props)} />
}
