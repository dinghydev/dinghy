import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACT_N = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.not_contact;',
  _width: 50,
  _height: 25,
}

export function ContactN(props: DiagramNodeProps) {
  return (
    <Shape {...CONTACT_N} {...props} _style={extendStyle(CONTACT_N, props)} />
  )
}
