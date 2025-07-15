import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIRING_HUB = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/wiring_hub.svg;',
  _width: 50,
  _height: 34,
}

export function WiringHub(props: DiagramNodeProps) {
  return <Shape {...WIRING_HUB} {...props} />
}
