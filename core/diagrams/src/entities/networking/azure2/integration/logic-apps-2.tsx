import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_APPS_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/internet_of_things/Logic_Apps.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function LogicApps2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOGIC_APPS_2)} />
}
