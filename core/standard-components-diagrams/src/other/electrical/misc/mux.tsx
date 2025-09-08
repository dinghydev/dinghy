import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MUX = {
  _style: {
    entity:
      'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;whiteSpace=wrap;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function Mux(props: DiagramNodeProps) {
  return <Shape {...MUX} {...props} _style={extendStyle(MUX, props)} />
}
