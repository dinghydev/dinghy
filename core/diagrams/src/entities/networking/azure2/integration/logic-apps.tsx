import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Logic_Apps.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 52,
}

export function LogicApps(props: NodeProps) {
  return (
    <Shape {...LOGIC_APPS} {...props} _style={extendStyle(LOGIC_APPS, props)} />
  )
}
