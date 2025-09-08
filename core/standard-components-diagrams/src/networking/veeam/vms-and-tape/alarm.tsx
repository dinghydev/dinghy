import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALARM = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.alarm;',
  },
  _original_width: 52.8,
  _original_height: 37.6,
}

export function Alarm(props: DiagramNodeProps) {
  return <Shape {...ALARM} {...props} _style={extendStyle(ALARM, props)} />
}
