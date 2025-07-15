import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKER_CONTAINER_APP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Worker_Container_App.svg;',
  _width: 68,
  _height: 66,
}

export function WorkerContainerApp(props: DiagramNodeProps) {
  return <Shape {...WORKER_CONTAINER_APP} {...props} />
}
