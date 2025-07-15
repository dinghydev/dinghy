import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.machine_learning;',
  _width: 49.8,
  _height: 50.099999999999994,
}

export function MachineLearning(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING} {...props} />
}
