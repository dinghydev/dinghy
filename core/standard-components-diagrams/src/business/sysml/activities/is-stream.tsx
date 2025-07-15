import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_STREAM = {
  _style: 'html=1;shape=mxgraph.sysml.isStream;whiteSpace=wrap;align=center;',
  _width: 300,
  _height: 60,
}

export function IsStream(props: DiagramNodeProps) {
  return <Shape {...IS_STREAM} {...props} />
}
