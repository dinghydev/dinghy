import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFRASTRUCTURE_SERVICES = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/infrastructure_services.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function InfrastructureServices(props: DiagramNodeProps) {
  return <Shape {...INFRASTRUCTURE_SERVICES} {...props} />
}
