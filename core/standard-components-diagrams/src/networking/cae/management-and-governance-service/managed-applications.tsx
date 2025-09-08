import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANAGED_APPLICATIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Applications.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function ManagedApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_APPLICATIONS}
      {...props}
      _style={extendStyle(MANAGED_APPLICATIONS, props)}
    />
  )
}
