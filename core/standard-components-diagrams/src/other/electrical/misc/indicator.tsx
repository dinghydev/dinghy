import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDICATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.indicator',
  },
  _width: 60,
  _height: 60,
}

export function Indicator(props: DiagramNodeProps) {
  return (
    <Shape {...INDICATOR} {...props} _style={extendStyle(INDICATOR, props)} />
  )
}
