import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.application;appType=location;archiType=square;fillColor=#efd1e4;',
  },
  _width: 150,
  _height: 75,
}

export function Location(props: DiagramNodeProps) {
  return (
    <Shape {...LOCATION} {...props} _style={extendStyle(LOCATION, props)} />
  )
}
