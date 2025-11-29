import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABS_WITH_DROPDOWN = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;spacingRight=10;',
  },
  _width: 1,
  _height: 45,
}

export function TabsWithDropdown(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABS_WITH_DROPDOWN)} />
}
