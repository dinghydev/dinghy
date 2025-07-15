import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VALUE_STREAM_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.valueStream;',
  _width: 70,
  _height: 35,
}

export function ValueStream2(props: DiagramNodeProps) {
  return <Shape {...VALUE_STREAM_2} {...props} />
}
