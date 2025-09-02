import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABS_WITH_DROPDOWN = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#0085FC;spacingRight=10;',
  },
  _original_width: 1,
  _original_height: 45,
}

export function TabsWithDropdown(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABS_WITH_DROPDOWN}
      {...props}
      _style={extendStyle(TABS_WITH_DROPDOWN, props)}
    />
  )
}
