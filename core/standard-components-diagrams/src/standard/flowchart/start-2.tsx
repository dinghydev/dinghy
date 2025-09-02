import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const START_2 = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.start_2;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Start2(props: DiagramNodeProps) {
  return <Shape {...START_2} {...props} _style={extendStyle(START_2, props)} />
}
