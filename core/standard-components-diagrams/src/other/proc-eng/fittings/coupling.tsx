import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COUPLING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.coupling;',
  },
  _original_width: 50,
  _original_height: 100,
}

export function Coupling(props: DiagramNodeProps) {
  return (
    <Shape {...COUPLING} {...props} _style={extendStyle(COUPLING, props)} />
  )
}
