import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_INTERNAL_BLOCK_DIAGRAM = {
  _style:
    'shape=rect;html=1;overflow=fill;strokeWidth=2;whiteSpace=wrap;align=center;verticalAlign=top;recursiveResize=0;',
  _width: 0,
  _height: 160,
}

export function AllocationDerivedPropertiesInternalBlockDiagram(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_INTERNAL_BLOCK_DIAGRAM}
      {...props}
    />
  )
}
