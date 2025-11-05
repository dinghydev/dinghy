import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CELL_PHONE_IPHONE_STANDALONE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_iphone_standalone;',
  },
  _width: 25,
  _height: 42,
}

export function CellPhoneIphoneStandalone(props: NodeProps) {
  return (
    <Shape
      {...CELL_PHONE_IPHONE_STANDALONE}
      {...props}
      _style={extendStyle(CELL_PHONE_IPHONE_STANDALONE, props)}
    />
  )
}
