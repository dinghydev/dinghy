import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const START = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.start_1;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Start(props: DiagramNodeProps) {
  return <Shape {...START} {...props} _style={extendStyle(START, props)} />
}
