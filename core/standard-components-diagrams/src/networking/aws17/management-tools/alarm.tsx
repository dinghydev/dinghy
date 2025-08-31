import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALARM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alarm;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 54,
  _height: 66,
}

export function Alarm(props: DiagramNodeProps) {
  return <Shape {...ALARM} {...props} _style={extendStyle(ALARM, props)} />
}
