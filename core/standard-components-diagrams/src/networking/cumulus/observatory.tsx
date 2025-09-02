import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBSERVATORY = {
  _style: {
    entity: 'fillColor=#009271;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Observatory(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBSERVATORY}
      {...props}
      _style={extendStyle(OBSERVATORY, props)}
    />
  )
}
