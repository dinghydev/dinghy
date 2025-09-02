import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACT_CENTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.contact_center;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 66,
}

export function ContactCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTACT_CENTER}
      {...props}
      _style={extendStyle(CONTACT_CENTER, props)}
    />
  )
}
