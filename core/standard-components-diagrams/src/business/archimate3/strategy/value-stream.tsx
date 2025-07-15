import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VALUE_STREAM = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=valueStream;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function ValueStream(props: DiagramNodeProps) {
  return <Shape {...VALUE_STREAM} {...props} />
}
