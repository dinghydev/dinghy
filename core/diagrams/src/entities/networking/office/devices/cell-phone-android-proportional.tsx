import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CELL_PHONE_ANDROID_PROPORTIONAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_android_proportional;',
  },
  _width: 17,
  _height: 31,
}

export function CellPhoneAndroidProportional(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CELL_PHONE_ANDROID_PROPORTIONAL)}
    />
  )
}
