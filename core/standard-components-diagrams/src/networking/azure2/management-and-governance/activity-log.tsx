import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVITY_LOG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Activity_Log.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 67,
}

export function ActivityLog(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVITY_LOG}
      {...props}
      _style={extendStyle(ACTIVITY_LOG, props)}
    />
  )
}
