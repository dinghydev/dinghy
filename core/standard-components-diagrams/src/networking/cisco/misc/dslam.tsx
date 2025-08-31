import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DSLAM = {
  _style:
    'shape=mxgraph.cisco.misc.dslam;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 46,
  _height: 51,
}

export function Dslam(props: DiagramNodeProps) {
  return <Shape {...DSLAM} {...props} _style={extendStyle(DSLAM, props)} />
}
