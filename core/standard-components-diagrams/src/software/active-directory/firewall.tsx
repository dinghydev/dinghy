import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/firewall.svg;strokeColor=none;',
  },
  _original_width: 30.5,
  _original_height: 50,
}

export function Firewall(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL} {...props} _style={extendStyle(FIREWALL, props)} />
  )
}
