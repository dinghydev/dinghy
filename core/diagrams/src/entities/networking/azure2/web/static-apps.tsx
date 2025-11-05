import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATIC_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Static_Apps.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 54,
}

export function StaticApps(props: NodeProps) {
  return (
    <Shape
      {...STATIC_APPS}
      {...props}
      _style={extendStyle(STATIC_APPS, props)}
    />
  )
}
