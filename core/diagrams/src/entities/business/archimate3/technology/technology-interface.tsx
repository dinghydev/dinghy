import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TECHNOLOGY_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=interface;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyInterface(props: NodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_INTERFACE}
      {...props}
      _style={extendStyle(TECHNOLOGY_INTERFACE, props)}
    />
  )
}
