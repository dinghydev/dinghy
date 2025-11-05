import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTACTS_BAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.contacts_bar;strokeColor=#0080F0;fillColor=#e0e0e0',
  },
  _width: 175,
  _height: 28.000000000000004,
}

export function ContactsBar(props: NodeProps) {
  return (
    <Shape
      {...CONTACTS_BAR}
      {...props}
      _style={extendStyle(CONTACTS_BAR, props)}
    />
  )
}
