import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT = {
  _style:
    'shape=note;html=1;size=15;spacingLeft=5;align=left;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  _width: 270,
  _height: 140,
}

export function AllocationDerivedPropertiesComment(props: DiagramNodeProps) {
  return <Shape {...ALLOCATION_DERIVED_PROPERTIES_COMMENT} {...props} />
}
