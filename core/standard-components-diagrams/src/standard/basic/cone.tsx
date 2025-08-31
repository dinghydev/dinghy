import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone',
  _width: 60,
  _height: 60,
}

export function Cone(props: DiagramNodeProps) {
  return <Shape {...CONE} {...props} _style={extendStyle(CONE, props)} />
}
