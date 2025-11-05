import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVITY_LOG = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Log.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function ActivityLog(props: NodeProps) {
  return (
    <Shape
      {...ACTIVITY_LOG}
      {...props}
      _style={extendStyle(ACTIVITY_LOG, props)}
    />
  )
}
