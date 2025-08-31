import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAPTOP_WIRELESS = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/wireless/Laptop_Wireless.svg;strokeColor=none;',
  _width: 57.599999999999994,
  _height: 47.400000000000006,
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
