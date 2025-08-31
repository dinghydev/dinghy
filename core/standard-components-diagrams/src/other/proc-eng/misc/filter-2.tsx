import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILTER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.filter_2;',
  },
  _width: 60,
  _height: 60,
}

export function Filter2(props: DiagramNodeProps) {
  return (
    <Shape {...FILTER_2} {...props} _style={extendStyle(FILTER_2, props)} />
  )
}
