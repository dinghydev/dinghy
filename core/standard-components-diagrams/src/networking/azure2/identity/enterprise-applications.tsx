import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTERPRISE_APPLICATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Enterprise_Applications.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function EnterpriseApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTERPRISE_APPLICATIONS}
      {...props}
      _style={extendStyle(ENTERPRISE_APPLICATIONS, props)}
    />
  )
}
