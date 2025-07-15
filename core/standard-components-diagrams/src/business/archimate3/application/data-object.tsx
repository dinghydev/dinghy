import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_OBJECT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=passive;archiType=square;',
  _width: 150,
  _height: 75,
}

export function DataObject(props: DiagramNodeProps) {
  return <Shape {...DATA_OBJECT} {...props} />
}
