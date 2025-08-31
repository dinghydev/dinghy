import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABS_WITH_DESCRIPTION = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;align=left;verticalAlign=top;fontSize=14;',
  },
  _width: 4,
  _height: 135,
}

export function TabsWithDescription(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABS_WITH_DESCRIPTION}
      {...props}
      _style={extendStyle(TABS_WITH_DESCRIPTION, props)}
    />
  )
}
