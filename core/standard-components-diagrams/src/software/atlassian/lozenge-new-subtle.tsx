import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_NEW_SUBTLE = {
  _style:
    'dashed=0;html=1;rounded=1;strokeColor=#6554C0;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#6554C0',
  _width: 50,
  _height: 20,
}

export function LozengeNewSubtle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_NEW_SUBTLE}
      {...props}
      _style={extendStyle(LOZENGE_NEW_SUBTLE, props)}
    />
  )
}
