import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YELP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yelp;fillColor=#EF5140;gradientColor=#9C1410',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Yelp(props: DiagramNodeProps) {
  return <Shape {...YELP} {...props} _style={extendStyle(YELP, props)} />
}
