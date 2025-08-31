import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USB_DRIVE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.usb_drive;',
  _width: 40,
  _height: 17,
}

export function UsbDrive(props: DiagramNodeProps) {
  return (
    <Shape {...USB_DRIVE} {...props} _style={extendStyle(USB_DRIVE, props)} />
  )
}
