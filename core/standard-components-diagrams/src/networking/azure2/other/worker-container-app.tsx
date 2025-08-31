import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER_CONTAINER_APP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Worker_Container_App.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 66,
}

export function WorkerContainerApp(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKER_CONTAINER_APP}
      {...props}
      _style={extendStyle(WORKER_CONTAINER_APP, props)}
    />
  )
}
