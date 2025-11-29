import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATE_WITH_ENTRY_POINT = {
  _style: {
    entity:
      'shape=umlState;rounded=1;verticalAlign=middle;align=center;absoluteArcSize=1;arcSize=10;umlStateConnection=connPointRefEntry;boundedLbl=1;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 60,
}

export function StateWithEntryPoint(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, STATE_WITH_ENTRY_POINT)} />
  )
}
