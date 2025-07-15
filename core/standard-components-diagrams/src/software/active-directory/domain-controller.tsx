import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOMAIN_CONTROLLER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/domain_controller.svg;',
  _width: 35,
  _height: 50,
}

export function DomainController(props: DiagramNodeProps) {
  return <Shape {...DOMAIN_CONTROLLER} {...props} />
}
