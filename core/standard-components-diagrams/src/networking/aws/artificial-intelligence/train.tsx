import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAIN = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sagemaker_train;',
  },
  _original_width: 78,
  _original_height: 65,
}

export function Train(props: DiagramNodeProps) {
  return <Shape {...TRAIN} {...props} _style={extendStyle(TRAIN, props)} />
}
