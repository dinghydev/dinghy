import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBERED_ENTRY_VERTICAL = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=top;html=1;shape=mxgraph.infographic.numberedEntryVert;dy=25;fillColor=#10739E;strokeColor=none;fontSize=17;fontColor=#FFFFFF;align=center;labelPosition=center;spacingTop=32;fontStyle=1;whiteSpace=wrap;',
  _width: 80,
  _height: 160,
}

export function NumberedEntryVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...NUMBERED_ENTRY_VERTICAL}
      {...props}
      _style={extendStyle(NUMBERED_ENTRY_VERTICAL, props)}
    />
  )
}
