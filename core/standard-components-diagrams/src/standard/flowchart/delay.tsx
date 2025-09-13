import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELAY = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.delay;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Delay(props: DiagramNodeProps) {
  return <Shape {...DELAY} {...props} _style={extendStyle(DELAY, props)} />
}
