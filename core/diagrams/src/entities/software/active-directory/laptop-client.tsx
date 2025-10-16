import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAPTOP_CLIENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/laptop_client.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function LaptopClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAPTOP_CLIENT}
      {...props}
      _style={extendStyle(LAPTOP_CLIENT, props)}
    />
  )
}
