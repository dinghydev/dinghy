import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_SERVICE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.service;',
  _width: 60,
  _height: 35,
}

export function BusinessService2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_SERVICE_2} {...props} />
}
