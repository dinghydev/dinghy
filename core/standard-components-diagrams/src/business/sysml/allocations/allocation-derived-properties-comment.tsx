import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT = {
  _style: {
    entity:
      'shape=note;html=1;size=15;spacingLeft=5;align=left;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  },
  _original_width: 270,
  _original_height: 140,
}

export function AllocationDerivedPropertiesComment(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_COMMENT}
      {...props}
      _style={extendStyle(ALLOCATION_DERIVED_PROPERTIES_COMMENT, props)}
    />
  )
}
