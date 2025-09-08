import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=function',
  },
  _original_width: 100,
  _original_height: 75,
}

export function BusinessFunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_FUNCTION}
      {...props}
      _style={extendStyle(BUSINESS_FUNCTION, props)}
    />
  )
}
