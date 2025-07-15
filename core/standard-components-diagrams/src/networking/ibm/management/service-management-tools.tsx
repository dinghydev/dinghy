import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_MANAGEMENT_TOOLS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/management/service_management_tools.svg;',
  _width: 60,
  _height: 60,
}

export function ServiceManagementTools(props: DiagramNodeProps) {
  return <Shape {...SERVICE_MANAGEMENT_TOOLS} {...props} />
}
