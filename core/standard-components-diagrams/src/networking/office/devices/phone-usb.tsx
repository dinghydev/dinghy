import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHONE_USB = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.phone_usb;',
  _width: 58,
  _height: 51,
}

export function PhoneUsb(props: DiagramNodeProps) {
  return <Shape {...PHONE_USB} {...props} />
}
