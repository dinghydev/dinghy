import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_SHARE_INVITATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Share_Invitations.svg;strokeColor=none;',
  _width: 68,
  _height: 44.800000000000004,
}

export function DataShareInvitations(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_SHARE_INVITATIONS}
      {...props}
      _style={extendStyle(DATA_SHARE_INVITATIONS, props)}
    />
  )
}
