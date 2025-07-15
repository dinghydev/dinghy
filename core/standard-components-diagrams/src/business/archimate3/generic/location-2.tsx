import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCATION_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.locationIcon;fillColor=#efd1e4;aspect=fixed;',
  _width: 35,
  _height: 50,
}

export function Location2(props: DiagramNodeProps) {
  return <Shape {...LOCATION_2} {...props} />
}
