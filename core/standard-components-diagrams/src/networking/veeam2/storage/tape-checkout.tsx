import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_CHECKOUT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_checkout;',
  },
  _original_width: 46,
  _original_height: 30,
}

export function TapeCheckout(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_CHECKOUT}
      {...props}
      _style={extendStyle(TAPE_CHECKOUT, props)}
    />
  )
}
