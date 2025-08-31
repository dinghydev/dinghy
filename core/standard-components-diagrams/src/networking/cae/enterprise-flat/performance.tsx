import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERFORMANCE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.performance',
  },
  _width: 60,
  _height: 60,
}

export function Performance(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERFORMANCE}
      {...props}
      _style={extendStyle(PERFORMANCE, props)}
    />
  )
}
