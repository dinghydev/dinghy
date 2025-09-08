import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.machine_learning;',
  },
  _original_width: 49.8,
  _original_height: 50.099999999999994,
}

export function MachineLearning(props: DiagramNodeProps) {
  return (
    <Shape
      {...MACHINE_LEARNING}
      {...props}
      _style={extendStyle(MACHINE_LEARNING, props)}
    />
  )
}
