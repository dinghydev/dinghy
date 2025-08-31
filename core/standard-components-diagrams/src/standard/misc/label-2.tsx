import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LABEL_2 = {
  _style: {
    entity:
      'label;whiteSpace=wrap;html=1;align=center;verticalAlign=bottom;spacingLeft=0;spacingBottom=4;imageAlign=center;imageVerticalAlign=top;image=img/clipart/Gear_128x128.png',
  },
  _width: 120,
  _height: 80,
}

export function Label2(props: DiagramNodeProps) {
  return <Shape {...LABEL_2} {...props} _style={extendStyle(LABEL_2, props)} />
}
