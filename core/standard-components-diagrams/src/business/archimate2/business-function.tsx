import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=function',
  },
  _width: 100,
  _height: 75,
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
