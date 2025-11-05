import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TECHNOLOGY_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=func;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyFunction(props: NodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_FUNCTION}
      {...props}
      _style={extendStyle(TECHNOLOGY_FUNCTION, props)}
    />
  )
}
