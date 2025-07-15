import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_PROCESS_TRACKING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Business_Process_Tracking.svg;',
  _width: 49.120000000000005,
  _height: 68,
}

export function BusinessProcessTracking(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_PROCESS_TRACKING} {...props} />
}
