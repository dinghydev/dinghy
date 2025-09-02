import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_ACTOR = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=actor',
  },
  _original_width: 100,
  _original_height: 75,
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
