import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRIVER = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=driver',
  _width: 100,
  _height: 75,
}

export function Driver(props: DiagramNodeProps) {
  return <Shape {...DRIVER} {...props} />
}
