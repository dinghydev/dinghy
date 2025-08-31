import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT_3 = {
  _style: 'rounded=0;html=1;labelBackgroundColor=none;endArrow=none;dashed=1;',
  _width: 2,
  _height: 140,
}

export function AllocationDerivedPropertiesComment3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_DERIVED_PROPERTIES_COMMENT_3}
      {...props}
      _style={extendStyle(ALLOCATION_DERIVED_PROPERTIES_COMMENT_3, props)}
    />
  )
}
