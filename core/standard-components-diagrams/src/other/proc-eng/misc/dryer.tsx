import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRYER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.dryer;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Dryer(props: DiagramNodeProps) {
  return <Shape {...DRYER} {...props} _style={extendStyle(DRYER, props)} />
}
