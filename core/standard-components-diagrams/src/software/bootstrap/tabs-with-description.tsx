import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABS_WITH_DESCRIPTION = {
  _style:
    'strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;align=left;verticalAlign=top;fontSize=14;',
  _width: 4,
  _height: 135,
}

export function TabsWithDescription(props: DiagramNodeProps) {
  return <Shape {...TABS_WITH_DESCRIPTION} {...props} />
}
