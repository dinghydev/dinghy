import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAPTOP_CLIENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/laptop_client.svg;strokeColor=none;',
  _width: 45,
  _height: 50,
}

export function LaptopClient(props: DiagramNodeProps) {
  return <Shape {...LAPTOP_CLIENT} {...props} />
}
