import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIRING_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/wiring_hub.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 34,
}

export function WiringHub(props: DiagramNodeProps) {
  return (
    <Shape {...WIRING_HUB} {...props} _style={extendStyle(WIRING_HUB, props)} />
  )
}
