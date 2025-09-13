import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINATOR = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.terminator;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Terminator(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINATOR} {...props} _style={extendStyle(TERMINATOR, props)} />
  )
}
