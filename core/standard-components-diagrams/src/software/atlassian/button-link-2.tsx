import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_LINK_2 = {
  _style:
    'fillColor=none;strokeColor=none;html=1;fontColor=#0057D8;align=center;verticalAlign=middle;fontStyle=0;fontSize=12',
  _width: 86,
  _height: 33,
}

export function ButtonLink2(props: DiagramNodeProps) {
  return <Shape {...BUTTON_LINK_2} {...props} />
}
