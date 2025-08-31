import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.battery;',
  _width: 30,
  _height: 12,
}

export function Battery(props: DiagramNodeProps) {
  return <Shape {...BATTERY} {...props} _style={extendStyle(BATTERY, props)} />
}
