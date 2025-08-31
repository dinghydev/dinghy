import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLANK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.blank2;',
  },
  _width: 20,
  _height: 60,
}

export function Blank(props: DiagramNodeProps) {
  return <Shape {...BLANK} {...props} _style={extendStyle(BLANK, props)} />
}
