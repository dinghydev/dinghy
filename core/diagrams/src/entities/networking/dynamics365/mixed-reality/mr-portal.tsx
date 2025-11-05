import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MR_PORTAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/MRPortal.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.32,
}

export function MrPortal(props: NodeProps) {
  return (
    <Shape {...MR_PORTAL} {...props} _style={extendStyle(MR_PORTAL, props)} />
  )
}
