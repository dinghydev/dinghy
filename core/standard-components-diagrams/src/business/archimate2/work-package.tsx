import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORK_PACKAGE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.rounded=1',
  _width: 100,
  _height: 75,
}

export function WorkPackage(props: DiagramNodeProps) {
  return <Shape {...WORK_PACKAGE} {...props} />
}
