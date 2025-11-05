import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISPLAY = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.display;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Display(props: NodeProps) {
  return <Shape {...DISPLAY} {...props} _style={extendStyle(DISPLAY, props)} />
}
