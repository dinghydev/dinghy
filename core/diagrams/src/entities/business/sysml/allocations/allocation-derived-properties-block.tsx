import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_BLOCK = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;strokeWidth=2;',
  },
  _width: 0,
  _height: 120,
}

export function AllocationDerivedPropertiesBlock(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_BLOCK}
      {...props}
      _style={extendStyle(ALLOCATION_DERIVED_PROPERTIES_BLOCK, props)}
    />
  )
}
