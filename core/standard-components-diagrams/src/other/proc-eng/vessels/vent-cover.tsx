import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VENT_COVER = {
  _style:
    'shape=mxgraph.pid.vessels.vent_(cover);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 10,
  _height: 20,
}

export function VentCover(props: DiagramNodeProps) {
  return (
    <Shape {...VENT_COVER} {...props} _style={extendStyle(VENT_COVER, props)} />
  )
}
