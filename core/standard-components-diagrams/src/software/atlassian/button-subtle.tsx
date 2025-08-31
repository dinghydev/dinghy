import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_SUBTLE = {
  _style: {
    entity:
      'rounded=1;align=left;fillColor=none;strokeColor=none;html=1;fontColor=#596780;fontSize=12;spacingLeft=26;',
  },
  _width: 0,
  _height: 33,
}

export function ButtonSubtle(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SUBTLE}
      {...props}
      _style={extendStyle(BUTTON_SUBTLE, props)}
    />
  )
}
