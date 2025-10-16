import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HDINSIGHT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/HDInsight.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Hdinsight(props: DiagramNodeProps) {
  return (
    <Shape {...HDINSIGHT} {...props} _style={extendStyle(HDINSIGHT, props)} />
  )
}
