import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALARM = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.alarm;',
  _width: 52.8,
  _height: 37.6,
}

export function Alarm(props: DiagramNodeProps) {
  return <Shape {...ALARM} {...props} />
}
