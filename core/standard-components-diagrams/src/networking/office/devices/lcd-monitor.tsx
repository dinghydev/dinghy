import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LCD_MONITOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.lcd_monitor;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function LcdMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...LCD_MONITOR}
      {...props}
      _style={extendStyle(LCD_MONITOR, props)}
    />
  )
}
