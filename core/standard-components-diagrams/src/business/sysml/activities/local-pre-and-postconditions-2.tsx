import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_PRE_AND_POSTCONDITIONS_2 = {
  _style:
    'shape=rect;html=1;rounded=1;strokeWidth=2;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 180,
}

export function LocalPreAndPostconditions2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCAL_PRE_AND_POSTCONDITIONS_2}
      {...props}
      _style={extendStyle(LOCAL_PRE_AND_POSTCONDITIONS_2, props)}
    />
  )
}
