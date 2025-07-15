import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REMOTE_RENDERING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/mixed_reality/Remote_Rendering.svg;',
  _width: 68,
  _height: 48,
}

export function RemoteRendering(props: DiagramNodeProps) {
  return <Shape {...REMOTE_RENDERING} {...props} />
}
