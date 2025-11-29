import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAUNCH_PORTAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Launch_Portal.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67,
}

export function LaunchPortal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAUNCH_PORTAL)} />
}
