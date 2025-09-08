import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USB_DRIVE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.usb_drive;',
  },
  _original_width: 40,
  _original_height: 17,
}

export function UsbDrive(props: DiagramNodeProps) {
  return (
    <Shape {...USB_DRIVE} {...props} _style={extendStyle(USB_DRIVE, props)} />
  )
}
