import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLOCATION_DERIVED_PROPERTIES_COMMENT_3 = {
  _style: {
    entity:
      'rounded=0;html=1;labelBackgroundColor=none;endArrow=none;dashed=1;',
  },
  _width: 2,
  _height: 140,
}

export function AllocationDerivedPropertiesComment3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ALLOCATION_DERIVED_PROPERTIES_COMMENT_3)}
    />
  )
}
