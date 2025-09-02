import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNHEALTHY_2 = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.unhealthy',
  },
  _original_width: 50,
  _original_height: 41,
}

export function Unhealthy2(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNHEALTHY_2}
      {...props}
      _style={extendStyle(UNHEALTHY_2, props)}
    />
  )
}
