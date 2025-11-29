import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCHEDULER_JOB_COLLECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Scheduler_Job_Collections.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function SchedulerJobCollections(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SCHEDULER_JOB_COLLECTIONS)} />
  )
}
