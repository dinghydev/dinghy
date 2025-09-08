import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USB_STICK = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.usb_stick;',
  },
  _original_width: 45,
  _original_height: 100,
}

export function UsbStick(props: DiagramNodeProps) {
  return (
    <Shape {...USB_STICK} {...props} _style={extendStyle(USB_STICK, props)} />
  )
}
