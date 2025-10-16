import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOMAIN_CONTROLLER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/domain_controller.svg;strokeColor=none;',
  },
  _width: 35,
  _height: 50,
}

export function DomainController(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOMAIN_CONTROLLER}
      {...props}
      _style={extendStyle(DOMAIN_CONTROLLER, props)}
    />
  )
}
