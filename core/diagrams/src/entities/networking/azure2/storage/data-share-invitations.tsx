import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_SHARE_INVITATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Share_Invitations.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 44.800000000000004,
}

export function DataShareInvitations(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATA_SHARE_INVITATIONS)} />
  )
}
