import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.multiplier;',
  },
  _width: 60,
  _height: 60,
}

export function Multiplier(props: DiagramNodeProps) {
  return (
    <Shape {...MULTIPLIER} {...props} _style={extendStyle(MULTIPLIER, props)} />
  )
}
