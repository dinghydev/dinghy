import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTERPRISE_APPLICATIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Enterprise_Applications.svg;strokeColor=none;',
  },
  _width: 49,
  _height: 50,
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
