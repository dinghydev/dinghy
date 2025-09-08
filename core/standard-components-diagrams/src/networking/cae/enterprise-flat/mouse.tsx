import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOUSE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.mouse',
  },
  _original_width: 30,
  _original_height: 50,
}

export function Mouse(props: DiagramNodeProps) {
  return <Shape {...MOUSE} {...props} _style={extendStyle(MOUSE, props)} />
}
