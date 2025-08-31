import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEEDBURNER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.feedburner;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Feedburner(props: DiagramNodeProps) {
  return (
    <Shape {...FEEDBURNER} {...props} _style={extendStyle(FEEDBURNER, props)} />
  )
}
