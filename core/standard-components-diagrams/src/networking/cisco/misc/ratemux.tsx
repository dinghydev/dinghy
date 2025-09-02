import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RATEMUX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ratemux;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 56,
}

export function Ratemux(props: DiagramNodeProps) {
  return <Shape {...RATEMUX} {...props} _style={extendStyle(RATEMUX, props)} />
}
