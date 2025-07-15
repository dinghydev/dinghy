import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const M_F_CONTACT_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.mf_contact_2',
  _width: 100,
  _height: 10,
}

export function MFContact2(props: DiagramNodeProps) {
  return <Shape {...M_F_CONTACT_2} {...props} />
}
