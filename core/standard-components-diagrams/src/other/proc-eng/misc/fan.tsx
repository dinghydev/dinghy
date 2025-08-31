import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.fan;fanType=common',
  },
  _width: 60,
  _height: 60,
}

export function Fan(props: DiagramNodeProps) {
  return <Shape {...FAN} {...props} _style={extendStyle(FAN, props)} />
}
