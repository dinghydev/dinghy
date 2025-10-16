import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAPTOP_WIRELESS = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/wireless/Laptop_Wireless.svg;strokeColor=none;',
  },
  _original_width: 57.599999999999994,
  _original_height: 47.400000000000006,
}

export function LaptopWireless(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAPTOP_WIRELESS}
      {...props}
      _style={extendStyle(LAPTOP_WIRELESS, props)}
    />
  )
}
