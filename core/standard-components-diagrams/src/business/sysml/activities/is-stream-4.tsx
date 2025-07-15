import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_STREAM_4 = {
  _style:
    'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;whiteSpace=wrap;',
  _width: 0,
  _height: 100,
}

export function IsStream4(props: DiagramNodeProps) {
  return <Shape {...IS_STREAM_4} {...props} />
}
