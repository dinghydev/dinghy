import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELTA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.delta;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Delta(props: DiagramNodeProps) {
  return <Shape {...DELTA} {...props} _style={extendStyle(DELTA, props)} />
}
