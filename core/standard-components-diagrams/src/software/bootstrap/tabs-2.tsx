import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABS_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;',
  },
  _original_width: 1,
  _original_height: 45,
}

export function Tabs2(props: DiagramNodeProps) {
  return <Shape {...TABS_2} {...props} _style={extendStyle(TABS_2, props)} />
}
