import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_OBJECT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.businessObject;overflow=fill;',
  _width: 70,
  _height: 40,
}

export function BusinessObject2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_OBJECT_2} {...props} />
}
