import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_JOBS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_Jobs.svg;',
  _width: 66,
  _height: 68,
}

export function WebJobs(props: DiagramNodeProps) {
  return <Shape {...WEB_JOBS} {...props} />
}
