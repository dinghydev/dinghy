import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HDINSIGHT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/HDInsight.svg;',
  _width: 50,
  _height: 48,
}

export function Hdinsight(props: DiagramNodeProps) {
  return <Shape {...HDINSIGHT} {...props} />
}
