import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYCLONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cyclone;',
  },
  _width: 100,
  _height: 80,
}

export function Cyclone(props: DiagramNodeProps) {
  return <Shape {...CYCLONE} {...props} _style={extendStyle(CYCLONE, props)} />
}
