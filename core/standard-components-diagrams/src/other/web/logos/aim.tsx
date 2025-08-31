import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.aim',
  },
  _width: 62.400000000000006,
  _height: 68.4,
}

export function Aim(props: DiagramNodeProps) {
  return <Shape {...AIM} {...props} _style={extendStyle(AIM, props)} />
}
