import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYROCK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.skyrock;fillColor=#009AFF;strokeColor=none',
  _width: 67.8,
  _height: 70.4,
}

export function Skyrock(props: DiagramNodeProps) {
  return <Shape {...SKYROCK} {...props} _style={extendStyle(SKYROCK, props)} />
}
