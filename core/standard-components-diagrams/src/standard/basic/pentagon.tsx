import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PENTAGON = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pentagon',
  _width: 100,
  _height: 90,
}

export function Pentagon(props: DiagramNodeProps) {
  return (
    <Shape {...PENTAGON} {...props} _style={extendStyle(PENTAGON, props)} />
  )
}
