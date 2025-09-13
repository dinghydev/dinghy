import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const M_F_CONTACT_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.mf_contact_2',
  },
  _width: 100,
  _height: 10,
}

export function MFContact2(props: DiagramNodeProps) {
  return (
    <Shape
      {...M_F_CONTACT_2}
      {...props}
      _style={extendStyle(M_F_CONTACT_2, props)}
    />
  )
}
