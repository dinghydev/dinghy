import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIELD_EFFECT_DIODE = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.field_effect_diode;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function FieldEffectDiode(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIELD_EFFECT_DIODE}
      {...props}
      _style={extendStyle(FIELD_EFFECT_DIODE, props)}
    />
  )
}
