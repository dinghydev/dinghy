import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_OBJECT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.businessObject;overflow=fill',
  _width: 100,
  _height: 75,
}

export function DataObject(props: DiagramNodeProps) {
  return <Shape {...DATA_OBJECT} {...props} />
}
