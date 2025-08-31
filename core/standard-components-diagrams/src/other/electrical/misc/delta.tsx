import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELTA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.delta;',
  },
  _width: 60,
  _height: 60,
}

export function Delta(props: DiagramNodeProps) {
  return <Shape {...DELTA} {...props} _style={extendStyle(DELTA, props)} />
}
