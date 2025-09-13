import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_OBJECT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=passive;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function BusinessObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_OBJECT}
      {...props}
      _style={extendStyle(BUSINESS_OBJECT, props)}
    />
  )
}
