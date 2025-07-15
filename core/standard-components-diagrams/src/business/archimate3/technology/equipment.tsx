import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EQUIPMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=equipment;archiType=square;',
  _width: 150,
  _height: 75,
}

export function Equipment(props: DiagramNodeProps) {
  return <Shape {...EQUIPMENT} {...props} />
}
