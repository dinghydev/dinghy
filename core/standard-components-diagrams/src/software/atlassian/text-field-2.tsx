import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;align=left;spacingLeft=5;strokeColor=#4C9AFF;html=1;strokeWidth=2;fontSize=12',
  },
  _width: 1,
  _height: 58,
}

export function TextField2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_2}
      {...props}
      _style={extendStyle(TEXT_FIELD_2, props)}
    />
  )
}
