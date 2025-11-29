import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABS_WITH_DESCRIPTION = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;align=left;verticalAlign=top;fontSize=14;',
  },
  _width: 4,
  _height: 135,
}

export function TabsWithDescription(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABS_WITH_DESCRIPTION)} />
}
