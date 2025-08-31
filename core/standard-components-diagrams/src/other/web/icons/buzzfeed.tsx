import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUZZFEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.buzzfeed;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Buzzfeed(props: DiagramNodeProps) {
  return (
    <Shape {...BUZZFEED} {...props} _style={extendStyle(BUZZFEED, props)} />
  )
}
