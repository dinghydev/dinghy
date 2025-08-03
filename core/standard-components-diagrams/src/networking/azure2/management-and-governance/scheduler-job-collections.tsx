import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCHEDULER_JOB_COLLECTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Scheduler_Job_Collections.svg;strokeColor=none;',
  _width: 68,
  _height: 64,
}

export function SchedulerJobCollections(props: DiagramNodeProps) {
  return <Shape {...SCHEDULER_JOB_COLLECTIONS} {...props} />
}
