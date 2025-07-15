import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNCTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.function;',
  _width: 60,
  _height: 40,
}

export function Function(props: DiagramNodeProps) {
  return <Shape {...FUNCTION} {...props} />
}
