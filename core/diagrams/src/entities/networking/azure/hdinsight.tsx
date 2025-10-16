import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HDINSIGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.hdinsight;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Hdinsight(props: DiagramNodeProps) {
  return (
    <Shape {...HDINSIGHT} {...props} _style={extendStyle(HDINSIGHT, props)} />
  )
}
