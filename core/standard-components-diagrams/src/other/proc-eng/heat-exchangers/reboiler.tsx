import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REBOILER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.reboiler;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 91,
  _height: 33,
}

export function Reboiler(props: DiagramNodeProps) {
  return (
    <Shape {...REBOILER} {...props} _style={extendStyle(REBOILER, props)} />
  )
}
