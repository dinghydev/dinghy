import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICK_CONTACT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.quick_contact;sketch=0;',
  _width: 0,
  _height: 165,
}

export function QuickContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICK_CONTACT}
      {...props}
      _style={extendStyle(QUICK_CONTACT, props)}
    />
  )
}
