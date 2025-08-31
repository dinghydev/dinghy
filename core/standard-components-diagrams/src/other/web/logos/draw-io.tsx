import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRAW_IO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drawio2;fillColor=#1A5BA3',
  },
  _width: 52.2,
  _height: 70.8,
}

export function DrawIo(props: DiagramNodeProps) {
  return <Shape {...DRAW_IO} {...props} _style={extendStyle(DRAW_IO, props)} />
}
