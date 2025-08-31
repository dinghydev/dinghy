import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABS_2 = {
  _style:
    'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;',
  _width: 1,
  _height: 45,
}

export function Tabs2(props: DiagramNodeProps) {
  return <Shape {...TABS_2} {...props} _style={extendStyle(TABS_2, props)} />
}
