import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_RENDERING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/mixed_reality/Remote_Rendering.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48,
}

export function RemoteRendering(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_RENDERING}
      {...props}
      _style={extendStyle(REMOTE_RENDERING, props)}
    />
  )
}
