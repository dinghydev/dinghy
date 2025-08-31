import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAPHRAGM = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.diaphragm;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Diaphragm(props: DiagramNodeProps) {
  return (
    <Shape {...DIAPHRAGM} {...props} _style={extendStyle(DIAPHRAGM, props)} />
  )
}
