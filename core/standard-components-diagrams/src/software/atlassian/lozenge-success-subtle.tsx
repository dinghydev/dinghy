import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_SUCCESS_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#008364;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#008364',
  },
  _original_width: 70,
  _original_height: 20,
}

export function LozengeSuccessSubtle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_SUCCESS_SUBTLE}
      {...props}
      _style={extendStyle(LOZENGE_SUCCESS_SUBTLE, props)}
    />
  )
}
