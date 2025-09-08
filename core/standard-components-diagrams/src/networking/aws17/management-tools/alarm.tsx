import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALARM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alarm;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 54,
  _original_height: 66,
}

export function Alarm(props: DiagramNodeProps) {
  return <Shape {...ALARM} {...props} _style={extendStyle(ALARM, props)} />
}
