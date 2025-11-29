import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATIC_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Static_Apps.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 56.00000000000001,
}

export function StaticApps(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STATIC_APPS)} />
}
