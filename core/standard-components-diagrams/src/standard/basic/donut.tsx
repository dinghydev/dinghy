import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DONUT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=25;',
  },
  _width: 60,
  _height: 60,
}

export function Donut(props: DiagramNodeProps) {
  return <Shape {...DONUT} {...props} _style={extendStyle(DONUT, props)} />
}
