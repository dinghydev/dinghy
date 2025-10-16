import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CELL_PHONE_WINDOWS_PHONE_PROPORTIONAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_windows_phone_proportional;',
  },
  _width: 16,
  _height: 29,
}

export function CellPhoneWindowsPhoneProportional(props: DiagramNodeProps) {
  return (
    <Shape
      {...CELL_PHONE_WINDOWS_PHONE_PROPORTIONAL}
      {...props}
      _style={extendStyle(CELL_PHONE_WINDOWS_PHONE_PROPORTIONAL, props)}
    />
  )
}
