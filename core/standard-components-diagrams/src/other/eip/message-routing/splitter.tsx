import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPLITTER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.splitter;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function Splitter(props: DiagramNodeProps) {
  return (
    <Shape {...SPLITTER} {...props} _style={extendStyle(SPLITTER, props)} />
  )
}
