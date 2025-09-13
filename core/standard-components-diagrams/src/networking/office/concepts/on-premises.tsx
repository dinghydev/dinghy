import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ON_PREMISES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.on_premises;',
  },
  _width: 34,
  _height: 55,
}

export function OnPremises(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_PREMISES}
      {...props}
      _style={extendStyle(ON_PREMISES, props)}
    />
  )
}
