import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DRYER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.dryer;',
  },
  _width: 80,
  _height: 100,
}

export function Dryer(props: DiagramNodeProps) {
  return <Shape {...DRYER} {...props} _style={extendStyle(DRYER, props)} />
}
