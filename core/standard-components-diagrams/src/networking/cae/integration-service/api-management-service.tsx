import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/API_Management.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function ApiManagementService(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(API_MANAGEMENT_SERVICE, props)}
    />
  )
}
