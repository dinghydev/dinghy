import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_ACTOR = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=actor;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function BusinessActor(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_ACTOR}
      {...props}
      _style={extendStyle(BUSINESS_ACTOR, props)}
    />
  )
}
