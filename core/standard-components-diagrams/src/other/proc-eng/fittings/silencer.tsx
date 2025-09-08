import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SILENCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.silencer;',
  },
  _original_width: 140,
  _original_height: 100,
}

export function Silencer(props: DiagramNodeProps) {
  return (
    <Shape {...SILENCER} {...props} _style={extendStyle(SILENCER, props)} />
  )
}
