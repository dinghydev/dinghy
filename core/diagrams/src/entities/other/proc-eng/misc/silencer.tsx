import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SILENCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.silencer;',
  },
  _width: 100,
  _height: 30,
}

export function Silencer(props: DiagramNodeProps) {
  return (
    <Shape {...SILENCER} {...props} _style={extendStyle(SILENCER, props)} />
  )
}
