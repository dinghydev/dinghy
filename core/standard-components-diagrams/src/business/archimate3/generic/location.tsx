import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.application;appType=location;archiType=square;fillColor=#efd1e4;',
  _width: 150,
  _height: 75,
}

export function Location(props: DiagramNodeProps) {
  return <Shape {...LOCATION} {...props} />
}
