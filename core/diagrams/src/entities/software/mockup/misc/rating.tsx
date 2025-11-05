import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RATING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.rating;strokeColor=#999999;fillColor=#ffff00;emptyFillColor=#ffffff;grade=4;ratingScale=5;ratingStyle=star;',
  },
  _width: 225,
  _height: 30,
}

export function Rating(props: NodeProps) {
  return <Shape {...RATING} {...props} _style={extendStyle(RATING, props)} />
}
