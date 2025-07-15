import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNCTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=func;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function Function(props: DiagramNodeProps) {
  return <Shape {...FUNCTION} {...props} />
}
