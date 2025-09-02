import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCE = {
  _style: {
    entity: 'fontStyle=0;html=1;whiteSpace=wrap;',
  },
  _original_width: 120,
  _original_height: 40,
}

export function Instance(props: DiagramNodeProps) {
  return (
    <Shape {...INSTANCE} {...props} _style={extendStyle(INSTANCE, props)} />
  )
}
