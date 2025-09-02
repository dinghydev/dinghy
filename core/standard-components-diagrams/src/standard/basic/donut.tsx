import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DONUT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=25;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Donut(props: DiagramNodeProps) {
  return <Shape {...DONUT} {...props} _style={extendStyle(DONUT, props)} />
}
