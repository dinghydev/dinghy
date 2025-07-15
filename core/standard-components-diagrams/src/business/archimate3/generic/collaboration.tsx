import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLABORATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  _width: 150,
  _height: 75,
}

export function Collaboration(props: DiagramNodeProps) {
  return <Shape {...COLLABORATION} {...props} />
}
