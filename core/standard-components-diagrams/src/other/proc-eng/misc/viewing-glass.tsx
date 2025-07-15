import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIEWING_GLASS = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.viewing_glass;',
  _width: 80,
  _height: 50,
}

export function ViewingGlass(props: DiagramNodeProps) {
  return <Shape {...VIEWING_GLASS} {...props} />
}
