import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACT_ACQUIRER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.contact_acquirer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 96,
  _original_height: 64,
}

export function ContactAcquirer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTACT_ACQUIRER}
      {...props}
      _style={extendStyle(CONTACT_ACQUIRER, props)}
    />
  )
}
