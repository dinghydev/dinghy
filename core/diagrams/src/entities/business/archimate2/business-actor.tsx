import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_ACTOR = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=actor',
  },
  _width: 100,
  _height: 75,
}

export function BusinessActor(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_ACTOR}
      {...props}
      _style={extendStyle(BUSINESS_ACTOR, props)}
    />
  )
}
