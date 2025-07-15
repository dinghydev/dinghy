import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT_2 = {
  _style: 'shape=rect;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 140,
}

export function AllocationDerivedPropertiesComment2(props: DiagramNodeProps) {
  return <Shape {...ALLOCATION_DERIVED_PROPERTIES_COMMENT_2} {...props} />
}
