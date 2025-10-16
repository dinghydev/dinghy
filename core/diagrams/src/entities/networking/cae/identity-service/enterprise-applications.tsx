import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTERPRISE_APPLICATIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Enterprise_Applications.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
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
