import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAUGE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.gauge;',
  },
  _width: 32.4,
  _height: 31.5,
}

export function Gauge(props: DiagramNodeProps) {
  return <Shape {...GAUGE} {...props} _style={extendStyle(GAUGE, props)} />
}
