import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOT_DOT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dot-dot;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 37,
  _original_height: 8,
}

export function DotDot(props: DiagramNodeProps) {
  return <Shape {...DOT_DOT} {...props} _style={extendStyle(DOT_DOT, props)} />
}
