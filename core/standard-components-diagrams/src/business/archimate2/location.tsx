import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.location',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Location(props: DiagramNodeProps) {
  return (
    <Shape {...LOCATION} {...props} _style={extendStyle(LOCATION, props)} />
  )
}
