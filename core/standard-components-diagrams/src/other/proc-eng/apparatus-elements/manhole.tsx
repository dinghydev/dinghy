import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANHOLE = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.manhole;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Manhole(props: DiagramNodeProps) {
  return <Shape {...MANHOLE} {...props} _style={extendStyle(MANHOLE, props)} />
}
