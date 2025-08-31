import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAAS_APPLICATIONS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/saas_applications.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SaasApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAAS_APPLICATIONS}
      {...props}
      _style={extendStyle(SAAS_APPLICATIONS, props)}
    />
  )
}
