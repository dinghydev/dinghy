import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCHEDULER_JOB_COLLECTIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SchedulerJobCollection.svg;',
  _width: 50,
  _height: 43,
}

export function SchedulerJobCollections(props: DiagramNodeProps) {
  return <Shape {...SCHEDULER_JOB_COLLECTIONS} {...props} />
}
