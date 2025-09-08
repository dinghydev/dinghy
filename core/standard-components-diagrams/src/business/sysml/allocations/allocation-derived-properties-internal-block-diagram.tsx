import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_INTERNAL_BLOCK_DIAGRAM = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;strokeWidth=2;whiteSpace=wrap;align=center;verticalAlign=top;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function AllocationDerivedPropertiesInternalBlockDiagram(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_INTERNAL_BLOCK_DIAGRAM}
      {...props}
      _style={extendStyle(
        ALLOCATION_DERIVED_PROPERTIES_INTERNAL_BLOCK_DIAGRAM,
        props,
      )}
    />
  )
}
