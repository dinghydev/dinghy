import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMILEY = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.smiley',
  _width: 60,
  _height: 60,
}

export function Smiley(props: DiagramNodeProps) {
  return <Shape {...SMILEY} {...props} _style={extendStyle(SMILEY, props)} />
}
