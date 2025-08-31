import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.heart',
  },
  _width: 60,
  _height: 60,
}

export function Heart(props: DiagramNodeProps) {
  return <Shape {...HEART} {...props} _style={extendStyle(HEART, props)} />
}
