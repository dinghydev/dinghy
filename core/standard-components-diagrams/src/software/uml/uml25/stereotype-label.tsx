import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE_LABEL = {
  _style: {
    entity: 'text;html=1;align=center;',
  },
  _original_width: 200,
  _original_height: 25,
}

export function StereotypeLabel(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_LABEL}
      {...props}
      _style={extendStyle(STEREOTYPE_LABEL, props)}
    />
  )
}
