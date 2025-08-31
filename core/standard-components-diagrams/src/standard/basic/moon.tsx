import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.moon',
  },
  _width: 75,
  _height: 100,
}

export function Moon(props: DiagramNodeProps) {
  return <Shape {...MOON} {...props} _style={extendStyle(MOON, props)} />
}
