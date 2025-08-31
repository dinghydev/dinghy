import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_INTERFACE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=interface',
  _width: 100,
  _height: 75,
}

export function BusinessInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERFACE}
      {...props}
      _style={extendStyle(BUSINESS_INTERFACE, props)}
    />
  )
}
