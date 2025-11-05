import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUICK_CONTACT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.quick_contact;sketch=0;',
  },
  _width: 0,
  _height: 165,
}

export function QuickContact(props: NodeProps) {
  return (
    <Shape
      {...QUICK_CONTACT}
      {...props}
      _style={extendStyle(QUICK_CONTACT, props)}
    />
  )
}
