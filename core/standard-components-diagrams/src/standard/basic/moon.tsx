import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOON = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.moon',
  _width: 75,
  _height: 100,
}

export function Moon(props: DiagramNodeProps) {
  return <Shape {...MOON} {...props} />
}
