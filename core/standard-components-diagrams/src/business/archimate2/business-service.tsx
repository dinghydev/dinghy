import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_SERVICE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=service',
  _width: 100,
  _height: 75,
}

export function BusinessService(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_SERVICE}
      {...props}
      _style={extendStyle(BUSINESS_SERVICE, props)}
    />
  )
}
