import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.fan;fanType=common',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Fan(props: DiagramNodeProps) {
  return <Shape {...FAN} {...props} _style={extendStyle(FAN, props)} />
}
