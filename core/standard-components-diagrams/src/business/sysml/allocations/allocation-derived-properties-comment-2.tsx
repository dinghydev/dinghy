import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT_2 = {
  _style: {
    entity: 'shape=rect;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 1,
  _original_height: 140,
}

export function AllocationDerivedPropertiesComment2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_COMMENT_2}
      {...props}
      _style={extendStyle(ALLOCATION_DERIVED_PROPERTIES_COMMENT_2, props)}
    />
  )
}
