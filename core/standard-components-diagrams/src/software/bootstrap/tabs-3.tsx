import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABS_3 = {
  _style:
    'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;fontColor=#4B5259;',
  _width: 3,
  _height: 45,
}

export function Tabs3(props: DiagramNodeProps) {
  return <Shape {...TABS_3} {...props} _style={extendStyle(TABS_3, props)} />
}
