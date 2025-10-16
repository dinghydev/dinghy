import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUNP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.funp',
  },
  _width: 75,
  _height: 40,
}

export function Funp(props: DiagramNodeProps) {
  return <Shape {...FUNP} {...props} _style={extendStyle(FUNP, props)} />
}
