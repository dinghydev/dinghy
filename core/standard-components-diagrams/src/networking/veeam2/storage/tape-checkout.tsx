import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_CHECKOUT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_checkout;',
  _width: 46,
  _height: 30,
}

export function TapeCheckout(props: DiagramNodeProps) {
  return <Shape {...TAPE_CHECKOUT} {...props} />
}
