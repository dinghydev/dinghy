import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TECHNOLOGY_FUNCTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=func;archiType=square;',
  _width: 150,
  _height: 75,
}

export function TechnologyFunction(props: DiagramNodeProps) {
  return <Shape {...TECHNOLOGY_FUNCTION} {...props} />
}
