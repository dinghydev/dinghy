import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DERIVE_CALLOUT = {
  _style: {
    entity: 'endArrow=none;edgeStyle=none;dashed=1;html=1;',
  },
  _original_width: 2,
  _original_height: 60,
}

export function DeriveCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...DERIVE_CALLOUT}
      {...props}
      _style={extendStyle(DERIVE_CALLOUT, props)}
    />
  )
}
