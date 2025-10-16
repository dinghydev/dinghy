import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=func;archiType=rounded;',
  },
  _width: 150,
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
