import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGEMENT_PORTAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Management_Portal.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 48,
}

export function ManagementPortal(props: NodeProps) {
  return (
    <Shape
      {...MANAGEMENT_PORTAL}
      {...props}
      _style={extendStyle(MANAGEMENT_PORTAL, props)}
    />
  )
}
