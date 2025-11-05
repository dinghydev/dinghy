import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE_USB = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.phone_usb;',
  },
  _original_width: 58,
  _original_height: 51,
}

export function PhoneUsb(props: NodeProps) {
  return (
    <Shape {...PHONE_USB} {...props} _style={extendStyle(PHONE_USB, props)} />
  )
}
