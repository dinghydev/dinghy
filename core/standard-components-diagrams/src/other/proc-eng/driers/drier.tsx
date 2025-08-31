import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 140,
}

export function Drier(props: DiagramNodeProps) {
  return <Shape {...DRIER} {...props} _style={extendStyle(DRIER, props)} />
}
