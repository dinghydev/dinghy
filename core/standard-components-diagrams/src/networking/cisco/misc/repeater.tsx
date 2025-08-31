import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPEATER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.repeater;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 42,
}

export function Repeater(props: DiagramNodeProps) {
  return (
    <Shape {...REPEATER} {...props} _style={extendStyle(REPEATER, props)} />
  )
}
