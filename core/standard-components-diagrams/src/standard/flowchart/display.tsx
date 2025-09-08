import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISPLAY = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.display;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Display(props: DiagramNodeProps) {
  return <Shape {...DISPLAY} {...props} _style={extendStyle(DISPLAY, props)} />
}
