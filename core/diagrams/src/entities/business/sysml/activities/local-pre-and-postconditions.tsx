import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCAL_PRE_AND_POSTCONDITIONS = {
  _style: {
    entity:
      'shape=note;html=1;size=15;strokeWidth=2;align=left;spacingLeft=5;whiteSpace=wrap;align=center;',
  },
  _width: 150,
  _height: 180,
}

export function LocalPreAndPostconditions(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, LOCAL_PRE_AND_POSTCONDITIONS)}
    />
  )
}
