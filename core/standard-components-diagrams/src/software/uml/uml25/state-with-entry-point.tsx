import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATE_WITH_ENTRY_POINT = {
  _style:
    'shape=umlState;rounded=1;verticalAlign=middle;align=center;absoluteArcSize=1;arcSize=10;umlStateConnection=connPointRefEntry;boundedLbl=1;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 60,
}

export function StateWithEntryPoint(props: DiagramNodeProps) {
  return <Shape {...STATE_WITH_ENTRY_POINT} {...props} />
}
