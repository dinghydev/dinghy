import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SVX = {
  _style:
    'shape=mxgraph.cisco.misc.svx;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 54,
  _height: 56,
}

export function Svx(props: DiagramNodeProps) {
  return <Shape {...SVX} {...props} _style={extendStyle(SVX, props)} />
}
