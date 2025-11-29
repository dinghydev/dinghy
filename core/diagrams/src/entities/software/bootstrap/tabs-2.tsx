import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABS_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;',
  },
  _width: 1,
  _height: 45,
}

export function Tabs2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABS_2)} />
}
