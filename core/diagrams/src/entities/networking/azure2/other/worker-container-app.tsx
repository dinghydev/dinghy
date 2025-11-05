import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKER_CONTAINER_APP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Worker_Container_App.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function WorkerContainerApp(props: NodeProps) {
  return (
    <Shape
      {...WORKER_CONTAINER_APP}
      {...props}
      _style={extendStyle(WORKER_CONTAINER_APP, props)}
    />
  )
}
