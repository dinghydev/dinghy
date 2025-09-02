import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPAQUE_ACTION = {
  _style: {
    entity: 'text;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 140,
  _original_height: 40,
}

export function OpaqueAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPAQUE_ACTION}
      {...props}
      _style={extendStyle(OPAQUE_ACTION, props)}
    />
  )
}
