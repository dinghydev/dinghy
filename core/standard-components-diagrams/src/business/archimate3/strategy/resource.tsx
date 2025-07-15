import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=resource;archiType=square;',
  _width: 150,
  _height: 75,
}

export function Resource(props: DiagramNodeProps) {
  return <Shape {...RESOURCE} {...props} />
}
