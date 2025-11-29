import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCHEDULER_JOB_COLLECTIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SchedulerJobCollection.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 43,
}

export function SchedulerJobCollections(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SCHEDULER_JOB_COLLECTIONS)} />
  )
}
