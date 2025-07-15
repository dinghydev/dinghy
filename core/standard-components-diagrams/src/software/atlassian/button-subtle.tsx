import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_SUBTLE = {
  _style:
    'rounded=1;align=left;fillColor=none;strokeColor=none;html=1;fontColor=#596780;fontSize=12;spacingLeft=26;',
  _width: 0,
  _height: 33,
}

export function ButtonSubtle(props: DiagramNodeProps) {
  return <Shape {...BUTTON_SUBTLE} {...props} />
}
