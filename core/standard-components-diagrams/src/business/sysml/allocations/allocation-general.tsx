import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATION_GENERAL = {
  _style: {
    entity: 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function AllocationGeneral(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_GENERAL}
      {...props}
      _style={extendStyle(ALLOCATION_GENERAL, props)}
    />
  )
}
