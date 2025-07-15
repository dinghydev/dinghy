import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_CENTER = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.data_center;',
  _width: 49.24,
  _height: 50,
}

export function DataCenter(props: DiagramNodeProps) {
  return <Shape {...DATA_CENTER} {...props} />
}
