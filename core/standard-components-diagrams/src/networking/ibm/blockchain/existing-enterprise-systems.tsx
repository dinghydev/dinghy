import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXISTING_ENTERPRISE_SYSTEMS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/existing_enterprise_systems.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ExistingEnterpriseSystems(props: DiagramNodeProps) {
  return <Shape {...EXISTING_ENTERPRISE_SYSTEMS} {...props} />
}
