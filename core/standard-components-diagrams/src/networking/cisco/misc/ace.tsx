import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ace;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function Ace(props: DiagramNodeProps) {
  return <Shape {...ACE} {...props} _style={extendStyle(ACE, props)} />
}
