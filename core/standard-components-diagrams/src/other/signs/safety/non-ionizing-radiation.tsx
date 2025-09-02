import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NON_IONIZING_RADIATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.non-ionizing_radiation;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 83,
}

export function NonIonizingRadiation(props: DiagramNodeProps) {
  return (
    <Shape
      {...NON_IONIZING_RADIATION}
      {...props}
      _style={extendStyle(NON_IONIZING_RADIATION, props)}
    />
  )
}
