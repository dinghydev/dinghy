import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HDINSIGHT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.hdinsight;',
  _width: 60,
  _height: 60,
}

export function Hdinsight(props: DiagramNodeProps) {
  return (
    <Shape {...HDINSIGHT} {...props} _style={extendStyle(HDINSIGHT, props)} />
  )
}
