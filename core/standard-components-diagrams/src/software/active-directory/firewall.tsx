import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/firewall.svg;',
  _width: 30.5,
  _height: 50,
}

export function Firewall(props: DiagramNodeProps) {
  return <Shape {...FIREWALL} {...props} />
}
