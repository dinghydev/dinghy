import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_ACTIVITY_DIAGRAM = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;rounded=1;absoluteArcSize=1;arcSize=20;',
  },
  _width: 0,
  _height: 100,
}

export function AllocationDerivedPropertiesActivityDiagram(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_ACTIVITY_DIAGRAM}
      {...props}
      _style={extendStyle(
        ALLOCATION_DERIVED_PROPERTIES_ACTIVITY_DIAGRAM,
        props,
      )}
    />
  )
}
