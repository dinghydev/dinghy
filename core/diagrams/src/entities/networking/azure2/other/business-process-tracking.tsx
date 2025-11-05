import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_PROCESS_TRACKING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Business_Process_Tracking.svg;strokeColor=none;',
  },
  _original_width: 49.120000000000005,
  _original_height: 68,
}

export function BusinessProcessTracking(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_PROCESS_TRACKING}
      {...props}
      _style={extendStyle(BUSINESS_PROCESS_TRACKING, props)}
    />
  )
}
