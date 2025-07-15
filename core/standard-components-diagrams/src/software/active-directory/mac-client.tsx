import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAC_CLIENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/mac_client.svg;',
  _width: 47,
  _height: 50,
}

export function MacClient(props: DiagramNodeProps) {
  return <Shape {...MAC_CLIENT} {...props} />
}
