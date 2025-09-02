import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONDENSER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.condenser;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Condenser(props: DiagramNodeProps) {
  return (
    <Shape {...CONDENSER} {...props} _style={extendStyle(CONDENSER, props)} />
  )
}
