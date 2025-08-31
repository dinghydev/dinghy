import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CELL_PHONE_WINDOWS_PHONE_STANDALONE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_windows_phone_standalone;',
  },
  _width: 24,
  _height: 42,
}

export function CellPhoneWindowsPhoneStandalone(props: DiagramNodeProps) {
  return (
    <Shape
      {...CELL_PHONE_WINDOWS_PHONE_STANDALONE}
      {...props}
      _style={extendStyle(CELL_PHONE_WINDOWS_PHONE_STANDALONE, props)}
    />
  )
}
