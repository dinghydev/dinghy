import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTEND_WITH_CONDITION = {
  _style: {
    entity: 'shape=note;size=15;spacingLeft=5;align=left;whiteSpace=wrap;',
  },
  _width: 250,
  _height: 80,
}

export function ExtendWithCondition(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTEND_WITH_CONDITION}
      {...props}
      _style={extendStyle(EXTEND_WITH_CONDITION, props)}
    />
  )
}
