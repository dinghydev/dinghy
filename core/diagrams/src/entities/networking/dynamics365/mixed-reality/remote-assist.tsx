import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_ASSIST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/RemoteAssist.svg;strokeColor=none;',
  },
  _original_width: 60.12,
  _original_height: 68,
}

export function RemoteAssist(props: NodeProps) {
  return (
    <Shape
      {...REMOTE_ASSIST}
      {...props}
      _style={extendStyle(REMOTE_ASSIST, props)}
    />
  )
}
