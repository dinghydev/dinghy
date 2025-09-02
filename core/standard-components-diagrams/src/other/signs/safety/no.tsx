import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.no;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function No(props: DiagramNodeProps) {
  return <Shape {...NO} {...props} _style={extendStyle(NO, props)} />
}
