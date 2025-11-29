import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIELD_EFFECT_DIODE = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.field_effect_diode;',
  },
  _width: 100,
  _height: 60,
}

export function FieldEffectDiode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIELD_EFFECT_DIODE)} />
}
