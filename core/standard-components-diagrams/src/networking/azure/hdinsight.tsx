import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HDINSIGHT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.hdinsight;',
  _width: 50,
  _height: 50,
}

export function Hdinsight(props: DiagramNodeProps) {
  return <Shape {...HDINSIGHT} {...props} />
}
