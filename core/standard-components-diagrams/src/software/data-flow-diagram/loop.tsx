import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOOP = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.loop',
  },
  _width: 80,
  _height: 30,
}

export function Loop(props: DiagramNodeProps) {
  return <Shape {...LOOP} {...props} _style={extendStyle(LOOP, props)} />
}
