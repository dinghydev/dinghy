import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LABEL_1 = {
  _style: {
    entity: 'label;whiteSpace=wrap;html=1;image=img/clipart/Gear_128x128.png',
  },
  _original_width: 140,
  _original_height: 60,
}

export function Label1(props: DiagramNodeProps) {
  return <Shape {...LABEL_1} {...props} _style={extendStyle(LABEL_1, props)} />
}
