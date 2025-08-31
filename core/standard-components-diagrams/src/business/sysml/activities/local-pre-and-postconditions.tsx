import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_PRE_AND_POSTCONDITIONS = {
  _style: {
    entity:
      'shape=note;html=1;size=15;strokeWidth=2;align=left;spacingLeft=5;whiteSpace=wrap;align=center;',
  },
  _width: 150,
  _height: 180,
}

export function LocalPreAndPostconditions(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCAL_PRE_AND_POSTCONDITIONS}
      {...props}
      _style={extendStyle(LOCAL_PRE_AND_POSTCONDITIONS, props)}
    />
  )
}
