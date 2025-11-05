import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRING_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Spring_Cloud.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SpringApps(props: NodeProps) {
  return (
    <Shape
      {...SPRING_APPS}
      {...props}
      _style={extendStyle(SPRING_APPS, props)}
    />
  )
}
