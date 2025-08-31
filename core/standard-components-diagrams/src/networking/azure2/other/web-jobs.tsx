import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_JOBS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_Jobs.svg;strokeColor=none;',
  _width: 66,
  _height: 68,
}

export function WebJobs(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_JOBS} {...props} _style={extendStyle(WEB_JOBS, props)} />
  )
}
