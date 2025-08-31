import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.star',
  },
  _width: 100,
  _height: 95,
}

export function Star(props: DiagramNodeProps) {
  return <Shape {...STAR} {...props} _style={extendStyle(STAR, props)} />
}
