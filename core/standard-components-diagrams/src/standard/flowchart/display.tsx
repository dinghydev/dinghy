import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISPLAY = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.display;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Display(props: DiagramNodeProps) {
  return <Shape {...DISPLAY} {...props} _style={extendStyle(DISPLAY, props)} />
}
