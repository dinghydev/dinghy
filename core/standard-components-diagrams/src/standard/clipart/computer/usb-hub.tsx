import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USB_HUB = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/USB_Hub_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function UsbHub(props: DiagramNodeProps) {
  return <Shape {...USB_HUB} {...props} _style={extendStyle(USB_HUB, props)} />
}
