import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.location',
  _width: 100,
  _height: 75,
}

export function Location(props: DiagramNodeProps) {
  return <Shape {...LOCATION} {...props} />
}
